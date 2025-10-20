import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IClientConfig } from '../interfaces/IClientConfig';
import { IAuthResponse } from '../interfaces/IAuthResponse';
import { IApiResponse } from '../interfaces/IApiResponse';
import { IReservation } from '../interfaces/IReservation';
import { ConfigManager } from '../utils/ConfigManager';
import { ErrorHandler, ApiError } from '../utils/ErrorHandler';
import { Logger } from '../utils/Logger';
import { Reservation } from '../models/Reservation';
import { Room } from '../models/Room';
import { Client } from '../models/Client';
import { Availability } from '../models/Availability';
import { Pricing } from '../models/Pricing';
import { Webhook } from '../models/Webhook';
import { Rate } from '../models/Rate';
import { IRateEntry } from '../interfaces/IRateEntry';
import { Source } from '../models/Source';
import { ISource } from '../interfaces/ISource';
import { Invoice } from '../models/Invoice';
import { IInvoice } from '../interfaces/IInvoice';
import { RoomType } from '../models/RoomType';

/**
 * Main Mobile Calendar API client class
 */
export class MobileCalendarClient {
  private axiosInstance!: AxiosInstance;
  private config: IClientConfig;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private tokenExpiry: number | null = null;
  private logger: Logger;

  constructor(config?: Partial<IClientConfig>) {
    this.logger = Logger.getInstance();
    
    // Get configuration from manager or use provided
    const configManager = ConfigManager.getInstance();
    this.config = config ? { ...configManager.getConfig(), ...config } : configManager.getConfig();

    this.initializeAxios();
    this.setupInterceptors();
  }

  /**
   * Initializes Axios instance
   */
  private initializeAxios(): void {
    this.axiosInstance = axios.create({
      baseURL: this.config.baseURL,
      headers: {
        'Host': new URL(this.config.baseURL!).hostname,
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      timeout: 30000 // 30 seconds timeout
    });
  }

  /**
   * Configures Axios interceptors
   */
  private setupInterceptors(): void {
    // Request interceptor - automatic token addition
    this.axiosInstance.interceptors.request.use(
      async (config) => {
        await this.ensureAuthenticated();
        if (this.accessToken) {
          config.headers.Authorization = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor - error handling and rate limiting
    this.axiosInstance.interceptors.response.use(
      (response) => {
        // Logging rate limit headers
        if (response.headers['x-ratelimit-remaining']) {
          this.logger.debug(
            `Rate Limit: ${response.headers['x-ratelimit-remaining']}/${response.headers['x-ratelimit-limit']}`
          );
        }
        return response;
      },
      async (error) => {
        if (error.response?.status === 401) {
          this.logger.warn('Token expired, re-authenticating...');
          this.accessToken = null;
          await this.login();
          // Retry original request
          return this.axiosInstance.request(error.config);
        }
        return Promise.reject(ErrorHandler.handleHttpError(error));
      }
    );
  }

  /**
   * Checks if user is authenticated
   */
  private async ensureAuthenticated(): Promise<void> {
    if (!this.accessToken || this.isTokenExpired()) {
      await this.login();
    }
  }

  /**
   * Checks if token is expired
   */
  private isTokenExpired(): boolean {
    if (!this.tokenExpiry) return true;
    return Date.now() >= this.tokenExpiry - 60000; // 1 min before expiration
  }

  /**
   * Logs into API
   */
  private async login(): Promise<IAuthResponse> {
    try {
      this.logger.debug('Logging into Mobile Calendar API...');
      
      const response = await axios.post(`${this.config.baseURL}/auth/token`, {
        clientId: this.config.clientId,
        clientSecret: this.config.clientSecret
      }, {
        headers: {
          'Host': new URL(this.config.baseURL!).hostname,
          'Content-Type': 'application/json',
          'Accept': '*/*'
        }
      });

      this.accessToken = response.data.access_token;
      this.refreshToken = response.data.refresh_token;
      this.tokenExpiry = Date.now() + (response.data.expires_in * 1000);

      this.logger.info('✓ Successfully authenticated');
      this.logger.debug(`RUID: ${response.data.meta?.ruid}`);
      
      return response.data;
    } catch (error) {
      this.logger.error('Login failed:', error);
      throw ErrorHandler.handleHttpError(error);
    }
  }

  // === RESERVATIONS ===

  /**
   * Gets list of reservations
   */
  public async getReservations(params: any = {}): Promise<IApiResponse<Reservation[]>> {
    const response = await this.axiosInstance.get('/reservations', { params });
    return {
      ...response.data,
      data: response.data.data.map((reservation: any) => new Reservation(reservation))
    };
  }

  /**
   * Gets all rates
   */
  public async getRates(): Promise<IApiResponse<Rate[]>> {
    const response = await this.axiosInstance.get('/rates');
    return {
      ...response.data,
      data: (response.data.data as IRateEntry[]).map((entry) => new Rate(entry))
    };
  }

  /**
   * Gets reservation by ID
   */
  public async getReservation(id: number): Promise<IApiResponse<Reservation>> {
    const response = await this.axiosInstance.get(`/reservations/${id}`);
    return {
      ...response.data,
      data: new Reservation(response.data.data)
    };
  }

  /**
   * Creates new reservation
   */
  public async createReservation(data: Partial<IReservation>): Promise<IApiResponse<Reservation>> {
    const response = await this.axiosInstance.post('/reservations', data);
    return {
      ...response.data,
      data: new Reservation(response.data.data)
    };
  }

  /**
   * Updates reservation
   */
  public async updateReservation(id: number, data: Partial<IReservation>): Promise<IApiResponse<Reservation>> {
    const response = await this.axiosInstance.patch(`/reservations/${id}`, data);
    return {
      ...response.data,
      data: new Reservation(response.data.data)
    };
  }

  /**
   * Cancels reservation
   */
  public async cancelReservation(id: number): Promise<IApiResponse<any>> {
    const response = await this.axiosInstance.delete(`/reservations/${id}`);
    return response.data;
  }

  // === ROOMS ===

  /**
   * Gets list of rooms
   */
  public async getRooms(params: any = {}): Promise<IApiResponse<Room[]>> {
    const response = await this.axiosInstance.get('/rooms', { params });
    return {
      ...response.data,
      data: response.data.data.map((room: any) => new Room(room))
    };
  }

  /**
   * Gets room by ID
   */
  public async getRoom(id: number): Promise<IApiResponse<Room>> {
    const response = await this.axiosInstance.get(`/rooms/${id}`);
    const room = response.data.data;
    return {
      ...response.data,
      data: new Room(room)
    };
  }

  /**
   * Creates new room
   */
  public async createRoom(data: Partial<Room>): Promise<IApiResponse<Room>> {
    const response = await this.axiosInstance.post('/rooms', data);
    const room = response.data.data;
    return {
      ...response.data,
      data: new Room(room)
    };
  }

  /**
   * Updates room
   */
  public async updateRoom(id: number, data: Partial<Room>): Promise<IApiResponse<Room>> {
    const response = await this.axiosInstance.patch(`/rooms/${id}`, data);
    const room = response.data.data;
    return {
      ...response.data,
      data: new Room(room)
    };
  }

  /**
   * Deletes room
   */
  public async deleteRoom(id: number): Promise<IApiResponse<any>> {
    const response = await this.axiosInstance.delete(`/rooms/${id}`);
    return response.data;
  }

  // === AVAILABILITY ===

  /**
   * Gets room availability
   */
  public async getAvailability(params: any = {}): Promise<IApiResponse<Availability[]>> {
    const response = await this.axiosInstance.get('/availability', { params });
    return {
      ...response.data,
      data: response.data.data.map((item: any) => new Availability({
        roomId: item.roomId,
        availability: item.availability
      }))
    };
  }

  /**
   * Updates availability
   */
  public async updateAvailability(data: any): Promise<IApiResponse<any>> {
    const response = await this.axiosInstance.post('/availability', data);
    return response.data;
  }

  // === PRICING ===

  /**
   * Gets pricing
   */
  public async getPricing(params: any = {}): Promise<IApiResponse<Pricing[]>> {
    const response = await this.axiosInstance.get('/pricing', { params });
    return {
      ...response.data,
      data: response.data.data.map((pricing: any) => new Pricing(pricing))
    };
  }

  /**
   * Updates pricing
   */
  public async updatePricing(data: any): Promise<IApiResponse<any>> {
    const response = await this.axiosInstance.post('/pricing', data);
    return response.data;
  }

  // === CLIENTS ===

  /**
   * Gets list of clients
   */
  public async getClients(params: any = {}): Promise<IApiResponse<Client[]>> {
    const response = await this.axiosInstance.get('/clients', { params });
    return {
      ...response.data,
      data: response.data.data.map((client: any) => new Client(client))
    };
  }

  /**
   * Gets client by ID
   */
  public async getClient(id: number): Promise<IApiResponse<Client>> {
    const response = await this.axiosInstance.get(`/clients/${id}`);
    return {
      ...response.data,
      data: new Client(response.data.data)
    };
  }

  /**
   * Creates new client
   */
  public async createClient(data: Partial<Client>): Promise<IApiResponse<Client>> {
    const response = await this.axiosInstance.post('/clients', data);
    return {
      ...response.data,
      data: new Client(response.data.data)
    };
  }

  /**
   * Updates client
   */
  public async updateClient(id: number, data: Partial<Client>): Promise<IApiResponse<Client>> {
    const response = await this.axiosInstance.patch(`/clients/${id}`, data);
    return {
      ...response.data,
      data: new Client(response.data.data)
    };
  }

  /**
   * Deletes client
   */
  public async deleteClient(id: number): Promise<IApiResponse<any>> {
    const response = await this.axiosInstance.delete(`/clients/${id}`);
    return response.data;
  }

  // === WEBHOOKS ===

  /**
   * Gets list of webhooks
   */
  public async getWebhooks(): Promise<IApiResponse<Webhook[]>> {
    const response = await this.axiosInstance.get('/webhooks');
    return {
      ...response.data,
      data: response.data.data.map((webhook: any) => new Webhook(
        webhook.webhookId,
        webhook.url,
        webhook.events,
        webhook.status,
        webhook.createdAt,
        webhook.updatedAt,
        webhook.secret
      ))
    };
  }

  /**
   * Creates new webhook
   */
  public async createWebhook(data: Partial<Webhook>): Promise<IApiResponse<Webhook>> {
    const response = await this.axiosInstance.post('/webhooks', data);
    const webhook = response.data.data;
    return {
      ...response.data,
      data: new Webhook(
        webhook.webhookId,
        webhook.url,
        webhook.events,
        webhook.status,
        webhook.createdAt,
        webhook.updatedAt,
        webhook.secret
      )
    };
  }

  /**
   * Deletes webhook
   */
  public async deleteWebhook(id: number): Promise<IApiResponse<any>> {
    const response = await this.axiosInstance.delete(`/webhooks/${id}`);
    return response.data;
  }

  // === SOURCES ===

  /**
   * Gets all booking sources
   */
  public async getSources(): Promise<IApiResponse<Source[]>> {
    const response = await this.axiosInstance.get('/sources');
    return {
      ...response.data,
      data: (response.data.data as ISource[]).map((s) => new Source(s))
    };
  }

  // === INVOICES ===

  /**
   * Gets invoices (paginated)
   */
  public async getInvoices(params: any = {}): Promise<IApiResponse<Invoice[]>> {
    const response = await this.axiosInstance.get('/invoices', { params });
    return {
      ...response.data,
      data: response.data.data.map((inv: any) => new Invoice(inv))
    };
  }

  /**
   * Gets invoice by ID
   */
  public async getInvoice(id: number): Promise<IApiResponse<Invoice>> {
    const response = await this.axiosInstance.get(`/invoices/${id}`);
    return {
      ...response.data,
      data: new Invoice(response.data.data)
    };
  }

  /**
   * Creates invoice
   */
  public async createInvoice(data: Partial<IInvoice>): Promise<IApiResponse<Invoice>> {
    const response = await this.axiosInstance.post('/invoices', data);
    return {
      ...response.data,
      data: new Invoice(response.data.data)
    };
  }

  /**
   * Updates invoice
   */
  public async updateInvoice(id: number, data: Partial<IInvoice>): Promise<IApiResponse<Invoice>> {
    const response = await this.axiosInstance.patch(`/invoices/${id}`, data);
    return {
      ...response.data,
      data: new Invoice(response.data.data)
    };
  }

  /**
   * Deletes invoice
   */
  public async deleteInvoice(id: number): Promise<IApiResponse<any>> {
    const response = await this.axiosInstance.delete(`/invoices/${id}`);
    return response.data;
  }

  // === ROOM TYPES ===

  /**
   * Gets all room types
   */
  public async getRoomTypes(): Promise<IApiResponse<RoomType[]>> {
    const response = await this.axiosInstance.get('/room-types');
    return {
      ...response.data,
      data: response.data.data.map((roomType: any) => new RoomType(roomType))
    };
  }
}
