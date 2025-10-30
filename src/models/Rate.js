"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rate = void 0;
/**
 * Rate model with automatic field mapping
 */
var Rate = /** @class */ (function () {
    function Rate(data) {
        if (data === void 0) { data = {}; }
        var _this = this;
        this.rateId = 0;
        this.name = '';
        this.cancellationId = 0;
        this.meals = 0;
        this.parentRateId = null;
        this.rateRelation = null;
        this.rooms = null;
        this.types = null;
        this.cancellationPolicy = {
            cancellationId: 0,
            type: 'REFUNDABLE',
            cancellationPenaltyPercentageAfterDeadline: null,
            deadlineDays: null,
            deadlineHours: null,
            cancellationPenaltyNightsAfterDeadline: null,
            noShow: 'DEFAULT',
            prepaymentPercentage: null,
            prepaymentFirstNight: false
        };
        this.status = null;
        Object.keys(data).forEach(function (key) {
            if (key in _this) {
                _this[key] = data[key];
            }
        });
    }
    return Rate;
}());
exports.Rate = Rate;
