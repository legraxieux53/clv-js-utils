"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClvArrayUtils = void 0;
var object_path_1 = __importDefault(require("object-path"));
/**
 * This is an array utils collection for help development
 */
var ClvArrayUtils = /** @class */ (function () {
    function ClvArrayUtils() {
    }
    /**
     * Remove item in array that has specified value. Key may be a path.
     */
    ClvArrayUtils.removeFromArrayByValue = function (arr, key, value) {
        if (!arr)
            throw new Error('no array');
        if (!key)
            throw new Error('no key');
        if (!value)
            throw new Error('no value');
        arr.filter(function (item) {
            var data = object_path_1.default.get(item, key);
            return data === value;
        });
    };
    return ClvArrayUtils;
}());
exports.ClvArrayUtils = ClvArrayUtils;
