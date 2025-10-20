/**
 * Konfiguracja testów dla Mobile Calendar API Client
 */

// Ustaw zmienne środowiskowe dla testów
process.env.MC_CLIENT_ID = 'user3558_d8a0fa14ebe86534c9a98d233335d184';
process.env.MC_CLIENT_SECRET = 'b0b42b3c5562f361497e19eb51b3f33b97625db5cd728aa98655da569b7fbbe2';
process.env.MC_BASE_URL = 'https://apisandbox.mobile-calendar.com/v1/public';
process.env.NODE_ENV = 'test';

// Zwiększ timeout dla testów API
jest.setTimeout(30000);
