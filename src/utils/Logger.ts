/**
 * Poziomy logowania
 */
export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3
}

/**
 * Menedżer logowania dla klienta Mobile Calendar API
 */
export class Logger {
  private static instance: Logger;
  private logLevel: LogLevel;
  private isEnabled: boolean;

  private constructor() {
    this.logLevel = process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.INFO;
    this.isEnabled = process.env.MC_LOGGING !== 'false';
  }

  /**
   * Pobiera instancję singleton Logger
   */
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  /**
   * Ustawia poziom logowania
   */
  public setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  /**
   * Włącza/wyłącza logowanie
   */
  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
  }

  /**
   * Loguje błąd
   */
  public error(message: string, ...args: any[]): void {
    if (this.isEnabled && this.logLevel >= LogLevel.ERROR) {
      console.error(`[MC-API ERROR] ${message}`, ...args);
    }
  }

  /**
   * Loguje ostrzeżenie
   */
  public warn(message: string, ...args: any[]): void {
    if (this.isEnabled && this.logLevel >= LogLevel.WARN) {
      console.warn(`[MC-API WARN] ${message}`, ...args);
    }
  }

  /**
   * Loguje informację
   */
  public info(message: string, ...args: any[]): void {
    if (this.isEnabled && this.logLevel >= LogLevel.INFO) {
      console.info(`[MC-API INFO] ${message}`, ...args);
    }
  }

  /**
   * Loguje debug
   */
  public debug(message: string, ...args: any[]): void {
    if (this.isEnabled && this.logLevel >= LogLevel.DEBUG) {
      console.debug(`[MC-API DEBUG] ${message}`, ...args);
    }
  }
}
