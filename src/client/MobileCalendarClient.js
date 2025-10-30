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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCalendarClient = void 0;
var axios_1 = require("axios");
var ConfigManager_1 = require("../utils/ConfigManager");
var ErrorHandler_1 = require("../utils/ErrorHandler");
var Logger_1 = require("../utils/Logger");
var Reservation_1 = require("../models/Reservation");
var Room_1 = require("../models/Room");
var Client_1 = require("../models/Client");
var Availability_1 = require("../models/Availability");
var Pricing_1 = require("../models/Pricing");
var Webhook_1 = require("../models/Webhook");
var Rate_1 = require("../models/Rate");
var Source_1 = require("../models/Source");
var Invoice_1 = require("../models/Invoice");
var RoomType_1 = require("../models/RoomType");
/**
 * Main Mobile Calendar API client class
 */
var MobileCalendarClient = /** @class */ (function () {
    function MobileCalendarClient(config) {
        this.accessToken = null;
        this.refreshToken = null;
        this.tokenExpiry = null;
        this.logger = Logger_1.Logger.getInstance();
        // Get configuration from manager or use provided
        var configManager = ConfigManager_1.ConfigManager.getInstance();
        this.config = config ? __assign(__assign({}, configManager.getConfig()), config) : configManager.getConfig();
        this.initializeAxios();
        this.setupInterceptors();
    }
    /**
     * Initializes Axios instance
     */
    MobileCalendarClient.prototype.initializeAxios = function () {
        this.axiosInstance = axios_1.default.create({
            baseURL: this.config.baseURL,
            headers: {
                'Host': new URL(this.config.baseURL).hostname,
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            timeout: 30000 // 30 seconds timeout
        });
    };
    /**
     * Configures Axios interceptors
     */
    MobileCalendarClient.prototype.setupInterceptors = function () {
        var _this = this;
        // Request interceptor - automatic token addition
        this.axiosInstance.interceptors.request.use(function (config) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureAuthenticated()];
                    case 1:
                        _a.sent();
                        if (this.accessToken) {
                            config.headers.Authorization = "Bearer ".concat(this.accessToken);
                        }
                        return [2 /*return*/, config];
                }
            });
        }); }, function (error) { return Promise.reject(error); });
        // Response interceptor - error handling and rate limiting
        this.axiosInstance.interceptors.response.use(function (response) {
            // Logging rate limit headers
            if (response.headers['x-ratelimit-remaining']) {
                _this.logger.debug("Rate Limit: ".concat(response.headers['x-ratelimit-remaining'], "/").concat(response.headers['x-ratelimit-limit']));
            }
            return response;
        }, function (error) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 401)) return [3 /*break*/, 2];
                        this.logger.warn('Token expired, re-authenticating...');
                        this.accessToken = null;
                        return [4 /*yield*/, this.login()];
                    case 1:
                        _b.sent();
                        // Retry original request
                        return [2 /*return*/, this.axiosInstance.request(error.config)];
                    case 2: return [2 /*return*/, Promise.reject(ErrorHandler_1.ErrorHandler.handleHttpError(error))];
                }
            });
        }); });
    };
    /**
     * Checks if user is authenticated
     */
    MobileCalendarClient.prototype.ensureAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.accessToken || this.isTokenExpired())) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Checks if token is expired
     */
    MobileCalendarClient.prototype.isTokenExpired = function () {
        if (!this.tokenExpiry)
            return true;
        return Date.now() >= this.tokenExpiry - 60000; // 1 min before expiration
    };
    /**
     * Logs into API
     */
    MobileCalendarClient.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        this.logger.debug('Logging into Mobile Calendar API...');
                        return [4 /*yield*/, axios_1.default.post("".concat(this.config.baseURL, "/auth/token"), {
                                clientId: this.config.clientId,
                                clientSecret: this.config.clientSecret
                            }, {
                                headers: {
                                    'Host': new URL(this.config.baseURL).hostname,
                                    'Content-Type': 'application/json',
                                    'Accept': '*/*'
                                }
                            })];
                    case 1:
                        response = _b.sent();
                        this.accessToken = response.data.access_token;
                        this.refreshToken = response.data.refresh_token;
                        this.tokenExpiry = Date.now() + (response.data.expires_in * 1000);
                        this.logger.info('✓ Successfully authenticated');
                        this.logger.debug("RUID: ".concat((_a = response.data.meta) === null || _a === void 0 ? void 0 : _a.ruid));
                        return [2 /*return*/, response.data];
                    case 2:
                        error_1 = _b.sent();
                        this.logger.error('Login failed:', error_1);
                        throw ErrorHandler_1.ErrorHandler.handleHttpError(error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // === RESERVATIONS ===
    /**
     * Gets list of reservations
     */
    MobileCalendarClient.prototype.getReservations = function () {
        return __awaiter(this, arguments, void 0, function (params) {
            var response;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get('/reservations', { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: response.data.data.map(function (reservation) { return new Reservation_1.Reservation(reservation); }) })];
                }
            });
        });
    };
    /**
     * Gets all rates
     */
    MobileCalendarClient.prototype.getRates = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get('/rates')];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: response.data.data.map(function (entry) { return new Rate_1.Rate(entry); }) })];
                }
            });
        });
    };
    /**
     * Gets reservation by ID
     */
    MobileCalendarClient.prototype.getReservation = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get("/reservations/".concat(id))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Reservation_1.Reservation(response.data.data) })];
                }
            });
        });
    };
    /**
     * Creates new reservation
     */
    MobileCalendarClient.prototype.createReservation = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.post('/reservations', data)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Reservation_1.Reservation(response.data.data) })];
                }
            });
        });
    };
    /**
     * Updates reservation
     */
    MobileCalendarClient.prototype.updateReservation = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.patch("/reservations/".concat(id), data)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Reservation_1.Reservation(response.data.data) })];
                }
            });
        });
    };
    /**
     * Cancels reservation
     */
    MobileCalendarClient.prototype.cancelReservation = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.delete("/reservations/".concat(id))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // === ROOMS ===
    /**
     * Gets list of rooms
     */
    MobileCalendarClient.prototype.getRooms = function () {
        return __awaiter(this, arguments, void 0, function (params) {
            var response;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get('/rooms', { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: response.data.data.map(function (room) { return new Room_1.Room(room); }) })];
                }
            });
        });
    };
    /**
     * Gets room by ID
     */
    MobileCalendarClient.prototype.getRoom = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, room;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get("/rooms/".concat(id))];
                    case 1:
                        response = _a.sent();
                        room = response.data.data;
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Room_1.Room(room) })];
                }
            });
        });
    };
    /**
     * Creates new room
     */
    MobileCalendarClient.prototype.createRoom = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, room;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.post('/rooms', data)];
                    case 1:
                        response = _a.sent();
                        room = response.data.data;
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Room_1.Room(room) })];
                }
            });
        });
    };
    /**
     * Updates room
     */
    MobileCalendarClient.prototype.updateRoom = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, room;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.patch("/rooms/".concat(id), data)];
                    case 1:
                        response = _a.sent();
                        room = response.data.data;
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Room_1.Room(room) })];
                }
            });
        });
    };
    /**
     * Deletes room
     */
    MobileCalendarClient.prototype.deleteRoom = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.delete("/rooms/".concat(id))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // === AVAILABILITY ===
    /**
     * Gets room availability
     */
    MobileCalendarClient.prototype.getAvailability = function () {
        return __awaiter(this, arguments, void 0, function (params) {
            var response;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get('/availability', { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: response.data.data.map(function (item) { return new Availability_1.Availability({
                                    roomId: item.roomId,
                                    availability: item.availability
                                }); }) })];
                }
            });
        });
    };
    /**
     * Updates availability
     */
    MobileCalendarClient.prototype.updateAvailability = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.post('/availability', data)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // === PRICING ===
    /**
     * Gets pricing
     */
    MobileCalendarClient.prototype.getPricing = function () {
        return __awaiter(this, arguments, void 0, function (params) {
            var response;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get('/pricing', { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: response.data.data.map(function (pricing) { return new Pricing_1.Pricing(pricing); }) })];
                }
            });
        });
    };
    /**
     * Updates pricing
     */
    MobileCalendarClient.prototype.updatePricing = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.post('/pricing', data)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // === CLIENTS ===
    /**
     * Gets list of clients
     */
    MobileCalendarClient.prototype.getClients = function () {
        return __awaiter(this, arguments, void 0, function (params) {
            var response;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get('/clients', { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: response.data.data.map(function (client) { return new Client_1.Client(client); }) })];
                }
            });
        });
    };
    /**
     * Gets client by ID
     */
    MobileCalendarClient.prototype.getClient = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get("/clients/".concat(id))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Client_1.Client(response.data.data) })];
                }
            });
        });
    };
    /**
     * Creates new client
     */
    MobileCalendarClient.prototype.createClient = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.post('/clients', data)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Client_1.Client(response.data.data) })];
                }
            });
        });
    };
    /**
     * Updates client
     */
    MobileCalendarClient.prototype.updateClient = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.patch("/clients/".concat(id), data)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Client_1.Client(response.data.data) })];
                }
            });
        });
    };
    /**
     * Deletes client
     */
    MobileCalendarClient.prototype.deleteClient = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.delete("/clients/".concat(id))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // === WEBHOOKS ===
    /**
     * Gets list of webhooks
     */
    MobileCalendarClient.prototype.getWebhooks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get('/webhooks')];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: response.data.data.map(function (webhook) { return new Webhook_1.Webhook(webhook.webhookId, webhook.url, webhook.events, webhook.status, webhook.createdAt, webhook.updatedAt, webhook.secret); }) })];
                }
            });
        });
    };
    /**
     * Creates new webhook
     */
    MobileCalendarClient.prototype.createWebhook = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, webhook;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.post('/webhooks', data)];
                    case 1:
                        response = _a.sent();
                        webhook = response.data.data;
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Webhook_1.Webhook(webhook.webhookId, webhook.url, webhook.events, webhook.status, webhook.createdAt, webhook.updatedAt, webhook.secret) })];
                }
            });
        });
    };
    /**
     * Deletes webhook
     */
    MobileCalendarClient.prototype.deleteWebhook = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.delete("/webhooks/".concat(id))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // === SOURCES ===
    /**
     * Gets all booking sources
     */
    MobileCalendarClient.prototype.getSources = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get('/sources')];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: response.data.data.map(function (s) { return new Source_1.Source(s); }) })];
                }
            });
        });
    };
    // === INVOICES ===
    /**
     * Gets invoices (paginated)
     */
    MobileCalendarClient.prototype.getInvoices = function () {
        return __awaiter(this, arguments, void 0, function (params) {
            var response;
            if (params === void 0) { params = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get('/invoices', { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: response.data.data.map(function (inv) { return new Invoice_1.Invoice(inv); }) })];
                }
            });
        });
    };
    /**
     * Gets invoice by ID
     */
    MobileCalendarClient.prototype.getInvoice = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get("/invoices/".concat(id))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Invoice_1.Invoice(response.data.data) })];
                }
            });
        });
    };
    /**
     * Creates invoice
     */
    MobileCalendarClient.prototype.createInvoice = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.post('/invoices', data)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Invoice_1.Invoice(response.data.data) })];
                }
            });
        });
    };
    /**
     * Updates invoice
     */
    MobileCalendarClient.prototype.updateInvoice = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.patch("/invoices/".concat(id), data)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: new Invoice_1.Invoice(response.data.data) })];
                }
            });
        });
    };
    /**
     * Deletes invoice
     */
    MobileCalendarClient.prototype.deleteInvoice = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.delete("/invoices/".concat(id))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // === ROOM TYPES ===
    /**
     * Gets all room types
     */
    MobileCalendarClient.prototype.getRoomTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get('/room-types')];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, response.data), { data: response.data.data.map(function (roomType) { return new RoomType_1.RoomType(roomType); }) })];
                }
            });
        });
    };
    return MobileCalendarClient;
}());
exports.MobileCalendarClient = MobileCalendarClient;
