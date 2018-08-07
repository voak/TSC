"use strict";
var _a;
//Exercise1
var double = function (value) { return value * 2; };
console.log(double(10));
//Exercise4
var greet2 = function (name) {
    if (name === void 0) { name = "Default Name"; }
    console.log(name);
};
greet2();
greet2('Anna');
//Exercise3
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
//Exercise4
var newArray = [55, 20];
(_a = Array.prototype).push.apply(_a, [newArray].concat(numbers));
