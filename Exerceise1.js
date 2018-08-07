"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
console.log(myself.bankAccount.money);
var variable = "String content";
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//Arrow Functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplier = function (number1, number2) { return number1 * number2; };
console.log(multiplier(2, 5));
var greet = function () {
    console.log("Hello");
};
greet();
//Defualt values
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
countdown(20);
//Spread
var spread = [1, 3, 5, 6];
console.log('Max Value is ' + Math.max.apply(Math, spread));
//Rest Operator
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2));
//Destructuring Array
console.log("DESTRUCTURING ARRAY");
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//Destructuring Objects
console.log("DESTRUCTURING OBJECTS");
var useData = { userName: 'Max', age: 27 };
var userName = useData.userName, age = useData.age;
console.log(userName, age);
//An alias can be assigned to reference the variables
var Name = useData.userName, Age = useData.age;
console.log(Name, Age);
//Template Literals
var Name2 = 'Max';
var greeting = "This is a heading\nI'm " + userName + "\n";
console.log(greeting);
