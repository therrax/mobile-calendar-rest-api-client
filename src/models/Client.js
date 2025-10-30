"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/**
 * Client model class with automatic field mapping
 */
var Client = /** @class */ (function () {
    function Client(data) {
        if (data === void 0) { data = {}; }
        var _this = this;
        this.clientId = null;
        this.forename = '';
        this.name = '';
        this.phone = '';
        this.email = '';
        this.clientType = 'REGULAR';
        this.countryId = 0;
        this.lang = 'en';
        this.status = null;
        Object.keys(data).forEach(function (key) {
            if (key in _this) {
                _this[key] = data[key];
            }
        });
    }
    /**
     * Gets full name
     */
    Client.prototype.getFullName = function () {
        return "".concat(this.forename, " ").concat(this.name);
    };
    /**
     * Checks if client has complete contact information
     */
    Client.prototype.hasCompleteContactInfo = function () {
        return !!(this.phone && this.email);
    };
    return Client;
}());
exports.Client = Client;
