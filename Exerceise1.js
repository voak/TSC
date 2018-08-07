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
