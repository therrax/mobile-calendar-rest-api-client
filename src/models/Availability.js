"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Availability = void 0;
/**
 * Room availability model in API structure
 * { roomId, availability: [{ date, roomsToSell }, ...] }
 */
var Availability = /** @class */ (function () {
    function Availability(data) {
        this.roomId = data.roomId;
        this.availability = Array.isArray(data.availability) ? data.availability.map(function (a) { return ({
            date: a.date,
            roomsToSell: a.roomsToSell
        }); }) : [];
    }
    /**
     * Checks if the room is available on specific date
     */
    Availability.prototype.isAvailable = function (date) {
        return this.availability.some(function (a) { return a.date === date; });
    };
    /**
     * Returns availability map with date as key
     */
    Availability.prototype.toByDateMap = function () {
        var _this = this;
        return this.availability.reduce(function (acc, _a) {
            var date = _a.date, roomsToSell = _a.roomsToSell;
            if (!acc[date])
                acc[date] = [];
            acc[date].push({ roomId: _this.roomId, roomsToSell: roomsToSell });
            return acc;
        }, {});
    };
    return Availability;
}());
exports.Availability = Availability;
