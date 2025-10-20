import { MobileCalendarClient } from '../src/client/MobileCalendarClient';
import { ConfigManager } from '../src/utils/ConfigManager';
import { Logger } from '../src/utils/Logger';

// Mock axios
jest.mock('axios');
const axios = require('axios');

describe('MobileCalendarClient', () => {
  let client: MobileCalendarClient;
  let mockAxiosInstance: any;

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Mock axios instance
    mockAxiosInstance = {
      get: jest.fn(),
      post: jest.fn(),
      patch: jest.fn(),
      delete: jest.fn(),
      interceptors: {
        request: {
          use: jest.fn()
        },
        response: {
          use: jest.fn()
        }
      }
    };

    // Mock axios.create
    axios.create.mockReturnValue(mockAxiosInstance);
    
    // Mock axios.post for login
    axios.post.mockResolvedValue({
      data: {
        access_token: 'test_token',
        refresh_token: 'test_refresh_token',
        expires_in: 3600,
        token_type: 'Bearer',
        meta: { ruid: 'test_ruid' }
      }
    });

    client = new MobileCalendarClient({
      clientId: '',
      clientSecret: '',
      baseURL: 'https://apisandbox.mobile-calendar.com/v1/public'
    });
  });

  describe('Konstruktor', () => {
    it('powinien utworzyć instancję klienta z konfiguracją', () => {
      expect(client).toBeInstanceOf(MobileCalendarClient);
    });

    it('powinien użyć konfiguracji z ConfigManager gdy nie podano konfiguracji', () => {
      const configManager = ConfigManager.getInstance();
      const config = configManager.getConfig();
      
      expect(config.clientId).toBe('test_client_id');
      expect(config.clientSecret).toBe('test_client_secret');
    });
  });

  describe('Rezerwacje', () => {
    it('powinien pobrać listę rezerwacji', async () => {
      const mockResponse = {
        data: [
          {
            reservationId: 1,
            type: 'SINGLE',
            arrival: '2025-01-01',
            departure: '2025-01-03',
            roomId: 1,
            clientId: 1,
            client: { forename: 'John', name: 'Doe' },
            checkIn: '14:00',
            checkOut: '11:00',
            adults: 2,
            children: 0,
            kidsAge: [],
            registration: 'NONE',
            sourceId: 1,
            doorCode: '',
            additionalInfo: '',
            prepayment: 0,
            prepaymentDeadline: null,
            paymentStatus: 'NO_PAYMENT',
            paymentType: 'NONE',
            currency: 'PLN',
            meal: 'OV',
            adultsPortion: 0,
            childrenPortion: 0,
            additionalServices: [],
            color: '#000000',
            price: 100,
            pricePerRoom: 100,
            pricePerMeal: 0,
            discount: 0,
            discountType: 0,
            rateId: null
          }
        ],
        meta: { ruid: 'test_ruid' }
      };

      mockAxiosInstance.get.mockResolvedValue({ data: mockResponse });

      const result = await client.getReservations();

      expect(result.data).toHaveLength(1);
      expect(result.data[0]).toHaveProperty('reservationId', 1);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith('/reservations', { params: {} });
    });

    it('powinien utworzyć nową rezerwację', async () => {
      const reservationData = {
        type: 'SINGLE' as const,
        arrival: '2025-01-01',
        departure: '2025-01-03',
        roomId: 1,
        clientId: 1,
        client: { 
          clientId: 1,
          forename: 'John', 
          name: 'Doe',
          phone: '+48123456789',
          email: 'john@example.com',
          clientType: 'REGULAR' as const,
          countryId: 1,
          lang: 'en'
        },
        adults: 2,
        children: 0
      };

      const mockResponse = {
        data: {
          reservationId: 1,
          ...reservationData,
          checkIn: '14:00',
          checkOut: '11:00',
          kidsAge: [],
          registration: 'NONE',
          sourceId: 1,
          doorCode: '',
          additionalInfo: '',
          prepayment: 0,
          prepaymentDeadline: null,
          paymentStatus: 'NO_PAYMENT',
          paymentType: 'NONE',
          currency: 'PLN',
          meal: 'OV',
          adultsPortion: 0,
          childrenPortion: 0,
          additionalServices: [],
          color: '#000000',
          price: 100,
          pricePerRoom: 100,
          pricePerMeal: 0,
          discount: 0,
          discountType: 0,
          rateId: null
        },
        meta: { ruid: 'test_ruid' }
      };

      mockAxiosInstance.post.mockResolvedValue({ data: mockResponse });

      const result = await client.createReservation(reservationData);

      expect(result.data).toHaveProperty('reservationId', 1);
      expect(mockAxiosInstance.post).toHaveBeenCalledWith('/reservations', reservationData);
    });
  });

  describe('Pokoje', () => {
    it('powinien pobrać listę pokoi', async () => {
      const mockResponse = {
        data: [
          {
            roomId: 1,
            name: 'Deluxe Room',
            persons: 2,
            maxAdults: 2,
            maxChildren: 1,
            roomTypeId: null,
            roomType: 'ROOM',
            singleBed: 0,
            doubleBed: 1,
            extraBed: 0,
            service: 'CLEAN',
            serviceInfo: 'Daily cleaning',
            info: 'Room info',
            color: '#000000',
            square: '25',
            squareType: 'm2',
            description: { default: 'Description', pl: 'Opis' },
            equipment: [1, 2],
            shareInOffer: 1,
            locationId: null
          }
        ],
        meta: { ruid: 'test_ruid' }
      };

      mockAxiosInstance.get.mockResolvedValue({ data: mockResponse });

      const result = await client.getRooms();

      expect(result.data).toHaveLength(1);
      expect(result.data[0]).toHaveProperty('roomId', 1);
      expect(result.data[0]).toHaveProperty('name', 'Deluxe Room');
    });
  });

  describe('Stawki (Rates)', () => {
    it('powinien pobrać listę stawek', async () => {
      const mockResponse = {
        data: [
          {
            rateId: 58,
            name: 'Standard',
            cancellationId: 19,
            meals: 1,
            parentRateId: null,
            rateRelation: null,
            rooms: null,
            types: null,
            cancellationPolicy: {
              cancellationId: 19,
              type: 'REFUNDABLE',
              cancellationPenaltyPercentageAfterDeadline: 50,
              deadlineDays: 7,
              deadlineHours: null,
              cancellationPenaltyNightsAfterDeadline: null,
              noShow: 'DEFAULT',
              prepaymentPercentage: 50,
              prepaymentFirstNight: false
            }
          }
        ],
        meta: { ruid: 'test_ruid' }
      };

      mockAxiosInstance.get.mockResolvedValue({ data: mockResponse });

      const result = await client.getRates();

      expect(result.data).toHaveLength(1);
      expect(result.data[0]).toHaveProperty('rateId', 58);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith('/rates');
    });
  });

  describe('Klienci', () => {
    it('powinien pobrać listę klientów', async () => {
      const mockResponse = {
        data: [
          {
            clientId: 1,
            forename: 'John',
            name: 'Doe',
            id_klienta: '12345',
            phone: '+48123456789',
            email: 'john@example.com',
            clientType: 'REGULAR',
            countryId: 1,
            lang: 'en'
          }
        ],
        meta: { ruid: 'test_ruid' }
      };

      mockAxiosInstance.get.mockResolvedValue({ data: mockResponse });

      const result = await client.getClients();

      expect(result.data).toHaveLength(1);
      expect(result.data[0]).toHaveProperty('clientId', 1);
      expect(result.data[0]).toHaveProperty('forename', 'John');
    });
  });
});
