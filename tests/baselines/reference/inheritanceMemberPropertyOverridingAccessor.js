//// [inheritanceMemberPropertyOverridingAccessor.ts]
class a {
    private __x: () => string;
    get x() {
        return this.__x;
    }
    set x(aValue: () => string) {
        this.__x = aValue;
    }
}

class b extends a {
    x: () => string;
}

//// [inheritanceMemberPropertyOverridingAccessor.js]
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
})();var a = /** @class */ (function () {
    function a() {
    }
    Object.defineProperty(a.prototype, "x", {
        get: function () {
            return this.__x;
        },
        set: function (aValue) {
            this.__x = aValue;
        },
        enumerable: false,
        configurable: true
    });
    return a;
}());
var b = /** @class */ (function (_super) {
    __extends(b, _super);
    function b() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return b;
}(a));
