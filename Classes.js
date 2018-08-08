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
var Person = /** @class */ (function () {
    function Person(name, age, username) {
        this.username = username;
        this.name = name;
        this.age = age;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Max', 27, 'max');
console.log(person.name, person.username);
person.printAge();
person.setType("Cool Guy");
//Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(name) {
        var _this = _super.call(this, name, age, name) || this;
        _this.name = 'Maxi';
        return _this;
    }
    return Max;
}(Person));
