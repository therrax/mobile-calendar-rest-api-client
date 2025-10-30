"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
var luxon_1 = require("luxon");
/**
 * Reservation model class
 */
var Reservation = /** @class */ (function () {
    function Reservation(data) {
        if (data === void 0) { data = {}; }
        var _this = this;
        this.reservationId = 0;
        this.type = 'SINGLE';
        this.arrival = '';
        this.departure = '';
        this.roomId = null;
        this.clientId = null;
        this.client = {
            clientId: null,
            forename: '',
            name: '',
            phone: '',
            email: '',
            clientType: 'REGULAR',
            countryId: 0,
            lang: 'en'
        };
        this.checkIn = '';
        this.checkOut = '';
        this.adults = 0;
        this.children = 0;
        this.kidsAge = [];
        this.registration = 'NONE';
        this.sourceId = 0;
        this.doorCode = '';
        this.additionalInfo = '';
        this.prepayment = 0;
        this.prepaymentDeadline = null;
        this.paymentStatus = 'NO_PAYMENT';
        this.paymentType = 'NONE';
        this.currency = '';
        this.meal = '';
        this.adultsPortion = 0;
        this.childrenPortion = 0;
        this.additionalServices = [];
        this.color = '';
        this.price = 0;
        this.pricePerRoom = 0;
        this.pricePerMeal = 0;
        this.discount = 0;
        this.discountType = 0;
        this.rateId = null;
        this.status = null;
        Object.keys(data).forEach(function (key) {
            if (key in _this) {
                _this[key] = data[key];
            }
        });
    }
    /**
     * Checks if reservation is active
     */
    Reservation.prototype.isActive = function () {
        var now = luxon_1.DateTime.now();
        var arrivalDate = luxon_1.DateTime.fromISO(this.arrival);
        var departureDate = luxon_1.DateTime.fromISO(this.departure);
        return now >= arrivalDate && now <= departureDate;
    };
    /**
     * Calculates number of nights
     */
    Reservation.prototype.getNightsCount = function () {
        var arrivalDate = luxon_1.DateTime.fromISO(this.arrival);
        var departureDate = luxon_1.DateTime.fromISO(this.departure);
        return departureDate.diff(arrivalDate, 'days').days;
    };
    /**
     * Checks if reservation is in the future
     */
    Reservation.prototype.isFuture = function () {
        var now = luxon_1.DateTime.now();
        var arrivalDate = luxon_1.DateTime.fromISO(this.arrival);
        return arrivalDate > now;
    };
    return Reservation;
}());
exports.Reservation = Reservation;
