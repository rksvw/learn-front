"use strict";
// ?File having a same name and class with export method makes its modules
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    // private x: number; // ! Fields OR Properties
    // private y: number;
    function Point(_x, _y, _z) {
        this._x = _x;
        this._y = _y;
        this._z = _z;
        // * ? indicated optional variable
    }
    Point.prototype.draw = function () {
        // ...
        console.log("X: ", this._x + " , Y: " + this._y + " , Z: " + this._z);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value cannot be less than 0.");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
