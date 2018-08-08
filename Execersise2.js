"use strict";
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
newArray.push.apply(newArray, numbers);
console.log(newArray);
//Exsercise5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
//Exercise6
var scientist = { firstName: 'Will', experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
