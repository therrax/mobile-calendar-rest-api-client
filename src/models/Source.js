"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source = void 0;
/**
 * Source model with automatic field mapping
 */
var Source = /** @class */ (function () {
    function Source(data) {
        if (data === void 0) { data = {}; }
        var _this = this;
        this.sourceId = 0;
        this.name = '';
        this.isCustom = false;
        Object.keys(data).forEach(function (key) {
            if (key in _this) {
                _this[key] = data[key];
            }
        });
    }
    return Source;
}());
exports.Source = Source;
