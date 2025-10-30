"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomType = void 0;
/**
 * Room type model with automatic field mapping
 */
var RoomType = /** @class */ (function () {
    function RoomType(data) {
        if (data === void 0) { data = {}; }
        var _this = this;
        this.roomTypeId = 0;
        this.type = '';
        this.description = {
            default: '',
            pl: '',
            en: ''
        };
        this.singleBed = 0;
        this.doubleBed = 0;
        this.extraBed = 0;
        this.square = 0;
        this.maxAdults = 0;
        this.maxChildren = 0;
        this.maxPeople = 0;
        this.equipment = [];
        Object.keys(data).forEach(function (key) {
            if (key in _this) {
                _this[key] = data[key];
            }
        });
    }
    /**
     * Gets total bed capacity
     */
    RoomType.prototype.getTotalBeds = function () {
        return this.singleBed + this.doubleBed + this.extraBed;
    };
    /**
     * Checks if room type has specific equipment
     */
    RoomType.prototype.hasEquipment = function (equipmentKey) {
        return this.equipment.includes(equipmentKey);
    };
    /**
     * Gets description in specific language
     */
    RoomType.prototype.getDescription = function (lang) {
        if (lang === void 0) { lang = 'default'; }
        return this.description[lang] || this.description.default;
    };
    return RoomType;
}());
exports.RoomType = RoomType;
