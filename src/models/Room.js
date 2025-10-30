"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
/**
 * Room model class
 */
var Room = /** @class */ (function () {
    function Room(data) {
        if (data === void 0) { data = {}; }
        var _this = this;
        this.roomId = null;
        this.name = '';
        this.persons = 0;
        this.maxAdults = 0;
        this.maxChildren = 0;
        this.roomTypeId = null;
        this.roomType = 'STANDARD_ROOM';
        this.singleBed = 0;
        this.doubleBed = 0;
        this.extraBed = 0;
        this.service = 'CLEAN';
        this.serviceInfo = '';
        this.info = '';
        this.color = '';
        this.square = '';
        this.squareType = 'm2';
        this.description = { default: '', pl: '' };
        this.equipment = [];
        this.shareInOffer = 0;
        this.locationId = null;
        this.status = null;
        Object.keys(data).forEach(function (key) {
            if (key in _this) {
                _this[key] = data[key];
            }
        });
    }
    /**
     * Checks if the room can accommodate the specified number of people
     */
    Room.prototype.canAccommodate = function (adults, children) {
        return adults <= this.maxAdults && children <= this.maxChildren &&
            (adults + children) <= this.persons;
    };
    /**
     * Gets description in specified language
     */
    Room.prototype.getDescription = function (language) {
        if (language === void 0) { language = 'default'; }
        return this.description[language] || this.description.default;
    };
    /**
     * Checks if the room has specified equipment
     */
    Room.prototype.hasEquipment = function (equipmentKey) {
        return this.equipment.includes(equipmentKey);
    };
    return Room;
}());
exports.Room = Room;
