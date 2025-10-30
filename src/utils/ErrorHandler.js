"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = exports.ApiError = void 0;
/**
 * API error handling class
 */
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(message, status, ruid, originalError) {
        var _this = _super.call(this, message) || this;
        _this.name = 'ApiError';
        _this.status = status;
        _this.ruid = ruid;
        _this.originalError = originalError;
        return _this;
    }
    return ApiError;
}(Error));
exports.ApiError = ApiError;
/**
 * Error handler for Mobile Calendar API client
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    /**
     * Processes HTTP error into ApiError
     */
    ErrorHandler.handleHttpError = function (error) {
        var _a;
        if (error.response) {
            // Server response error
            var status_1 = error.response.status;
            var data = error.response.data;
            var ruid = ((_a = error.response.headers) === null || _a === void 0 ? void 0 : _a.ruid) || (data === null || data === void 0 ? void 0 : data.ruid);
            var message = 'API communication error';
            if (data === null || data === void 0 ? void 0 : data.detail) {
                message = data.detail;
            }
            else if (data === null || data === void 0 ? void 0 : data.message) {
                message = data.message;
            }
            else if (data === null || data === void 0 ? void 0 : data.error) {
                message = data.error;
            }
            else {
                message = "HTTP ".concat(status_1, ": ").concat(error.response.statusText);
            }
            return new ApiError(message, status_1, ruid, error);
        }
        else if (error.request) {
            // Network error
            return new ApiError('No connection to API server', undefined, undefined, error);
        }
        else {
            // Other error
            return new ApiError(error.message || 'Unknown error', undefined, undefined, error);
        }
    };
    /**
     * Checks if error is related to authorization
     */
    ErrorHandler.isAuthError = function (error) {
        return error.status === 401 || error.status === 403;
    };
    /**
     * Checks if error is related to rate limiting
     */
    ErrorHandler.isRateLimitError = function (error) {
        return error.status === 429;
    };
    /**
     * Checks if error is related to data validation
     */
    ErrorHandler.isValidationError = function (error) {
        return error.status === 400 || error.status === 422;
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
