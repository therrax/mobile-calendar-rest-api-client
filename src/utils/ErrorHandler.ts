/**
 * API error handling class
 */
export class ApiError extends Error {
  public status?: number;
  public ruid?: string;
  public originalError?: any;

  constructor(message: string, status?: number, ruid?: string, originalError?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.ruid = ruid;
    this.originalError = originalError;
  }
}

/**
 * Error handler for Mobile Calendar API client
 */
export class ErrorHandler {
  /**
   * Processes HTTP error into ApiError
   */
  public static handleHttpError(error: any): ApiError {
    if (error.response) {
      // Server response error
      const status = error.response.status;
      const data = error.response.data;
      const ruid = error.response.headers?.ruid || data?.ruid;
      
      let message = 'API communication error';
      
      if (data?.detail) {
        message = data.detail;
      } else if (data?.message) {
        message = data.message;
      } else if (data?.error) {
        message = data.error;
      } else {
        message = `HTTP ${status}: ${error.response.statusText}`;
      }

      return new ApiError(message, status, ruid, error);
    } else if (error.request) {
      // Network error
      return new ApiError(
        'No connection to API server',
        undefined,
        undefined,
        error
      );
    } else {
      // Other error
      return new ApiError(
        error.message || 'Unknown error',
        undefined,
        undefined,
        error
      );
    }
  }

  /**
   * Checks if error is related to authorization
   */
  public static isAuthError(error: ApiError): boolean {
    return error.status === 401 || error.status === 403;
  }

  /**
   * Checks if error is related to rate limiting
   */
  public static isRateLimitError(error: ApiError): boolean {
    return error.status === 429;
  }

  /**
   * Checks if error is related to data validation
   */
  public static isValidationError(error: ApiError): boolean {
    return error.status === 400 || error.status === 422;
  }
}
