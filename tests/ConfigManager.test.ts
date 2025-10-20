import { ConfigManager } from '../src/utils/ConfigManager';

describe('ConfigManager', () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    // Zapisz oryginalne zmienne środowiskowe
    originalEnv = { ...process.env };
  });

  afterEach(() => {
    // Przywróć oryginalne zmienne środowiskowe
    process.env = originalEnv;
  });

  describe('getInstance', () => {
    it('powinien zwrócić instancję singleton', () => {
      const instance1 = ConfigManager.getInstance();
      const instance2 = ConfigManager.getInstance();
      
      expect(instance1).toBe(instance2);
    });
  });

  describe('getConfig', () => {
    it('powinien zwrócić konfigurację z zmiennych środowiskowych', () => {
      const configManager = ConfigManager.getInstance();
      const config = configManager.getConfig();
      
      expect(config.clientId).toBe('test_client_id');
      expect(config.clientSecret).toBe('test_client_secret');
      expect(config.baseURL).toBe('https://test-api.com');
    });
  });

  describe('setConfig', () => {
    it('powinien ustawić nową konfigurację', () => {
      const configManager = ConfigManager.getInstance();
      const newConfig = {
        clientId: 'new_client_id',
        clientSecret: 'new_client_secret'
      };
      
      configManager.setConfig(newConfig);
      const config = configManager.getConfig();
      
      expect(config.clientId).toBe('new_client_id');
      expect(config.clientSecret).toBe('new_client_secret');
      expect(config.baseURL).toBe('https://test-api.com'); // Nie zmienione
    });
  });

  describe('isConfigValid', () => {
    it('powinien zwrócić true dla poprawnej konfiguracji', () => {
      const configManager = ConfigManager.getInstance();
      expect(configManager.isConfigValid()).toBe(true);
    });

    it('powinien zwrócić false dla niepoprawnej konfiguracji', () => {
      const configManager = ConfigManager.getInstance();
      configManager.setConfig({ clientId: '' });
      
      expect(configManager.isConfigValid()).toBe(false);
    });
  });
});
