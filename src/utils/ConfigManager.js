"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigManager = void 0;
var dotenv = require("dotenv");
/**
 * Menedżer konfiguracji dla klienta Mobile Calendar API
 */
var ConfigManager = /** @class */ (function () {
    function ConfigManager() {
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
    ConfigManager.getInstance = function () {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    };
    /**
     * Pobiera konfigurację klienta
     */
    ConfigManager.prototype.getConfig = function () {
        return __assign({}, this.config);
    };
    /**
     * Ustawia nową konfigurację
     */
    ConfigManager.prototype.setConfig = function (config) {
        this.config = __assign(__assign({}, this.config), config);
        this.validateConfig();
    };
    /**
     * Waliduje konfigurację
     */
    ConfigManager.prototype.validateConfig = function () {
        if (!this.config.clientId) {
            throw new Error('MC_CLIENT_ID jest wymagane w zmiennych środowiskowych');
        }
        if (!this.config.clientSecret) {
            throw new Error('MC_CLIENT_SECRET jest wymagane w zmiennych środowiskowych');
        }
        if (!this.config.baseURL) {
            throw new Error('MC_BASE_URL jest wymagane w zmiennych środowiskowych');
        }
    };
    /**
     * Sprawdza czy konfiguracja jest kompletna
     */
    ConfigManager.prototype.isConfigValid = function () {
        try {
            this.validateConfig();
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    return ConfigManager;
}());
exports.ConfigManager = ConfigManager;
