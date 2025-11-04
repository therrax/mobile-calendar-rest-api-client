"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pricing = void 0;
/**
 * Pricing model class
 */
var Pricing = /** @class */ (function () {
    function Pricing(data) {
        if (data === void 0) { data = {}; }
        var _this = this;
        this.roomId = 0;
        this.typeId = 0;
        this.prices = [];
        this.rate = {
            rateId: 0,
            name: '',
            parentRateId: null,
            percentage: null,
            cancellationPolicy: {
                cancellationId: 0,
                type: 'REFUNDABLE',
                cancellationPenaltyPercentageAfterDeadline: 0,
                deadlineDays: 0,
                deadlineHours: null,
                noShow: 'DEFAULT',
                prepaymentPercentage: 0,
                prepaymentFirstNight: false
            }
        };
        Object.keys(data).forEach(function (key) {
            if (key in _this) {
                _this[key] = data[key];
            }
        });
    }
    /**
     * Gets lowest price from all dates
     */
    Pricing.prototype.getLowestPrice = function () {
        if (this.prices.length === 0)
            return 0;
        var minPrice = Infinity;
        this.prices.forEach(function (price) {
            if (price.derivedPrices && Array.isArray(price.derivedPrices) && price.derivedPrices.length > 0) {
                var minDerived = Math.min.apply(Math, price.derivedPrices.map(function (dp) { return dp.price; }));
                minPrice = Math.min(minPrice, minDerived);
            }
            else {
                minPrice = Math.min(minPrice, price.basePrice);
            }
        });
        return minPrice === Infinity ? 0 : minPrice;
    };
    /**
     * Gets highest price from all dates
     */
    Pricing.prototype.getHighestPrice = function () {
        if (this.prices.length === 0)
            return 0;
        var maxPrice = 0;
        this.prices.forEach(function (price) {
            if (price.derivedPrices && Array.isArray(price.derivedPrices) && price.derivedPrices.length > 0) {
                var maxDerived = Math.max.apply(Math, price.derivedPrices.map(function (dp) { return dp.price; }));
                maxPrice = Math.max(maxPrice, maxDerived);
            }
            else {
                maxPrice = Math.max(maxPrice, price.basePrice);
            }
        });
        return maxPrice;
    };
    /**
     * Gets price for specific date and number of persons
     */
    Pricing.prototype.getPriceForDate = function (date, persons) {
        var priceData = this.prices.find(function (p) { return p.date === date; });
        if (!priceData)
            return null;
        var derivedPrice = priceData.derivedPrices.find(function (dp) { return dp.persons === persons; });
        return derivedPrice ? derivedPrice.price : priceData.basePrice;
    };
    /**
     * Checks if room is available on specific date
     */
    Pricing.prototype.isAvailableOnDate = function (date) {
        var priceData = this.prices.find(function (p) { return p.date === date; });
        return priceData ? priceData.restrictions.closed === 0 : false;
    };
    /**
     * Gets all available dates
     */
    Pricing.prototype.getAvailableDates = function () {
        return this.prices
            .filter(function (p) { return p.restrictions.closed === 0; })
            .map(function (p) { return p.date; });
    };
    return Pricing;
}());
exports.Pricing = Pricing;
