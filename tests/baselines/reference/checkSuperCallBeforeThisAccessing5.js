//// [checkSuperCallBeforeThisAccessing5.ts]
class Based { constructor(...arg) { } }
class Derived extends Based {
    public x: number;
    constructor() {
        super(this.x);
    }
}

//// [checkSuperCallBeforeThisAccessing5.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();var Based = /** @class */ (function () {
    function Based() {var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
    }
    return Based;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super.call(this, _this.x) || this;
        return _this;
    }
    return Derived;
}(Based));
