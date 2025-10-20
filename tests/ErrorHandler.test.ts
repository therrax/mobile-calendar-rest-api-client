import { ErrorHandler, ApiError } from '../src/utils/ErrorHandler';

describe('ErrorHandler', () => {
  describe('handleHttpError', () => {
    it('powinien obsłużyć błąd z odpowiedzią serwera', () => {
      const mockError = {
        response: {
          status: 400,
          data: { message: 'Bad Request' },
          headers: { ruid: 'test_ruid' }
        }
      };

      const apiError = ErrorHandler.handleHttpError(mockError);

      expect(apiError).toBeInstanceOf(ApiError);
      expect(apiError.message).toBe('Bad Request');
      expect(apiError.status).toBe(400);
      expect(apiError.ruid).toBe('test_ruid');
    });

    it('powinien obsłużyć błąd sieciowy', () => {
      const mockError = {
        request: {},
        message: 'Network Error'
      };

      const apiError = ErrorHandler.handleHttpError(mockError);

      expect(apiError).toBeInstanceOf(ApiError);
      expect(apiError.message).toBe('Brak połączenia z serwerem API');
    });

    it('powinien obsłużyć inny błąd', () => {
      const mockError = {
        message: 'Unknown error'
      };

      const apiError = ErrorHandler.handleHttpError(mockError);

      expect(apiError).toBeInstanceOf(ApiError);
      expect(apiError.message).toBe('Unknown error');
    });
  });

  describe('isAuthError', () => {
    it('powinien zwrócić true dla błędu 401', () => {
      const error = new ApiError('Unauthorized', 401);
      expect(ErrorHandler.isAuthError(error)).toBe(true);
    });

    it('powinien zwrócić true dla błędu 403', () => {
      const error = new ApiError('Forbidden', 403);
      expect(ErrorHandler.isAuthError(error)).toBe(true);
    });

    it('powinien zwrócić false dla innych błędów', () => {
      const error = new ApiError('Bad Request', 400);
      expect(ErrorHandler.isAuthError(error)).toBe(false);
    });
  });

  describe('isRateLimitError', () => {
    it('powinien zwrócić true dla błędu 429', () => {
      const error = new ApiError('Too Many Requests', 429);
      expect(ErrorHandler.isRateLimitError(error)).toBe(true);
    });

    it('powinien zwrócić false dla innych błędów', () => {
      const error = new ApiError('Bad Request', 400);
      expect(ErrorHandler.isRateLimitError(error)).toBe(false);
    });
  });

  describe('isValidationError', () => {
    it('powinien zwrócić true dla błędu 400', () => {
      const error = new ApiError('Bad Request', 400);
      expect(ErrorHandler.isValidationError(error)).toBe(true);
    });

    it('powinien zwrócić true dla błędu 422', () => {
      const error = new ApiError('Unprocessable Entity', 422);
      expect(ErrorHandler.isValidationError(error)).toBe(true);
    });

    it('powinien zwrócić false dla innych błędów', () => {
      const error = new ApiError('Internal Server Error', 500);
      expect(ErrorHandler.isValidationError(error)).toBe(false);
    });
  });
});
