var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pigs = /** @class */ (function () {
    function Pigs(name, breed, height, weight, distinct_personality, category) {
        this.name = name;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.distinct_personality = distinct_personality;
        this.category = category;
    }
    return Pigs;
}());
export { Pigs };
var Grey = /** @class */ (function (_super) {
    __extends(Grey, _super);
    function Grey(name, breed, height, weight, distinct_personality, category, swimming_ability) {
        var _this = _super.call(this, name, breed, height, weight, distinct_personality, category) || this;
        _this.swimming_ability = swimming_ability;
        return _this;
    }
    return Grey;
}(Pigs));
export { Grey };
var Chestnut = /** @class */ (function (_super) {
    __extends(Chestnut, _super);
    function Chestnut(name, breed, height, weight, distinct_personality, category, language) {
        var _this = _super.call(this, name, breed, height, weight, distinct_personality, category) || this;
        _this.language = language;
        return _this;
    }
    return Chestnut;
}(Pigs));
export { Chestnut };
var White = /** @class */ (function (_super) {
    __extends(White, _super);
    function White(name, breed, height, weight, distinct_personality, category, running_ability) {
        var _this = _super.call(this, name, breed, height, weight, distinct_personality, category) || this;
        _this.running_ability = running_ability;
        return _this;
    }
    return White;
}(Pigs));
export { White };
var Black = /** @class */ (function (_super) {
    __extends(Black, _super);
    function Black(name, breed, height, weight, distinct_personality, category, strength_ability) {
        var _this = _super.call(this, name, breed, height, weight, distinct_personality, category) || this;
        _this.strength_ability = strength_ability;
        return _this;
    }
    return Black;
}(Pigs));
export { Black };
