"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogLevel = void 0;
/**
 * Poziomy logowania
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
/**
 * Menedżer logowania dla klienta Mobile Calendar API
 */
var Logger = /** @class */ (function () {
    function Logger() {
        this.logLevel = process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.INFO;
        this.isEnabled = process.env.MC_LOGGING !== 'false';
    }
    /**
     * Pobiera instancję singleton Logger
     */
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    /**
     * Ustawia poziom logowania
     */
    Logger.prototype.setLogLevel = function (level) {
        this.logLevel = level;
    };
    /**
     * Włącza/wyłącza logowanie
     */
    Logger.prototype.setEnabled = function (enabled) {
        this.isEnabled = enabled;
    };
    /**
     * Loguje błąd
     */
    Logger.prototype.error = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.isEnabled && this.logLevel >= LogLevel.ERROR) {
            console.error.apply(console, __spreadArray(["[MC-API ERROR] ".concat(message)], args, false));
        }
    };
    /**
     * Loguje ostrzeżenie
     */
    Logger.prototype.warn = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.isEnabled && this.logLevel >= LogLevel.WARN) {
            console.warn.apply(console, __spreadArray(["[MC-API WARN] ".concat(message)], args, false));
        }
    };
    /**
     * Loguje informację
     */
    Logger.prototype.info = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.isEnabled && this.logLevel >= LogLevel.INFO) {
            console.info.apply(console, __spreadArray(["[MC-API INFO] ".concat(message)], args, false));
        }
    };
    /**
     * Loguje debug
     */
    Logger.prototype.debug = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.isEnabled && this.logLevel >= LogLevel.DEBUG) {
            console.debug.apply(console, __spreadArray(["[MC-API DEBUG] ".concat(message)], args, false));
        }
    };
    return Logger;
}());
exports.Logger = Logger;
