"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Exercise1 - Creating a class
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log('Tooooooooot');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
//Exercise2 - Inheritance
var BaseObjects = /** @class */ (function () {
    function BaseObjects() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObjects;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObjects));
var rect = new Rectangle();
rect.width = 5;
rect.length = 2;
console.log(rect.calcSize());
//Exercise3 - Inheritance
var Person_ = /** @class */ (function () {
    function Person_() {
        this._firstName = "";
        this.configurable = true;
        this.enumerable = true;
    }
    Object.defineProperty(Person_.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person_;
}());
var person_ = new Person_();
console.log(person_.firstName);
person_.firstName = "Ma";
console.log(person_.firstName);
person_.firstName = "Maximilian";
console.log(person_.firstName);
