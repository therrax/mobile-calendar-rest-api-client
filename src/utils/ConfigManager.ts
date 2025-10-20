import * as dotenv from 'dotenv';
import { IClientConfig } from '../interfaces/IClientConfig';

/**
 * Menedżer konfiguracji dla klienta Mobile Calendar API
 */
export class ConfigManager {
  private static instance: ConfigManager;
  private config: IClientConfig;

  private constructor() {
    // Załaduj zmienne środowiskowe
    dotenv.config();
    
    this.config = {
      clientId: process.env.MC_CLIENT_ID || '',
      clientSecret: process.env.MC_CLIENT_SECRET || '',
      baseURL: process.env.MC_BASE_URL || 'https://apisandbox.mobile-calendar.com/v1/public'
    };

    // Usunięto natychmiastową walidację, aby umożliwić nadpisanie konfiguracji w konstruktorze klienta
  }

  /**
   * Pobiera instancję singleton ConfigManager
   */
  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  /**
   * Pobiera konfigurację klienta
   */
  public getConfig(): IClientConfig {
    return { ...this.config };
  }

  /**
   * Ustawia nową konfigurację
   */
  public setConfig(config: Partial<IClientConfig>): void {
    this.config = { ...this.config, ...config };
    this.validateConfig();
  }

  /**
   * Waliduje konfigurację
   */
  private validateConfig(): void {
    if (!this.config.clientId) {
      throw new Error('MC_CLIENT_ID jest wymagane w zmiennych środowiskowych');
    }
    if (!this.config.clientSecret) {
      throw new Error('MC_CLIENT_SECRET jest wymagane w zmiennych środowiskowych');
    }
    if (!this.config.baseURL) {
      throw new Error('MC_BASE_URL jest wymagane w zmiennych środowiskowych');
    }
  }

  /**
   * Sprawdza czy konfiguracja jest kompletna
   */
  public isConfigValid(): boolean {
    try {
      this.validateConfig();
      return true;
    } catch {
      return false;
    }
  }
}
