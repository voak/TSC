"use strict";
/* Types in typescript*/
/* Let is use for variable delcaration and type assignment*/
var myName = 'Max';
//myName = 28; // Will return an error because the the type of my name is string and not number
var myAge = 27.5; // Type script does not have number types, therefore all numbers are number
var hasHobbies = false; //Does not accept numeric representation of boolean
var myRealAge; //Not asssigning an immediate type/value implies the type 'any' or such variable
myRealAge = 27;
myRealAge = '27';
var declared; //Implies a string variable ONLY
//Array
var hobbies = ['Cooking', 'Sports'];
console.log(hobbies[0]);
console.log(typeof hobbies);
//hobbies[3] = 100; This line fails because hobbies was declared as array of string
var many; // Allows 'many' to contain any data type
//Tuples: Arrays with mixed types
var address = ["Superstreet", 99]; //Without assigning a type,  declare the array to be of type any
address[0] = 63737;
console.log(address[0]);
var address2 = ["Superstreet", 99]; //Is fixing multiple data type in an array
//Enums
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Black"] = 100] = "Black";
    Color[Color["Red"] = 101] = "Red"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
console.log(Color.Black);
console.log(Color.Red);
//function
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log('Hello');
}
//Assigning types to function parameters
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 7));
var myMultiply;
myMultiply = multiply;
//Object
var userData = {
    name: "Max",
    age: 27
};
//Name of the variable is very important in ojects, because it uses reference. The order is not important
//complex object
var complex = {
    data: [100, 2.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2;
//Union types
var myRealRealAge = 27;
myRealRealAge = '27';
//Check types
var finalValue = 'A string';
if (typeof finalValue == 'string') {
    console.log("Final value is a number");
}
//never type: This type return nothing but not void. It more like terminates execution at this point
function neverReturns() {
    throw new Error('An error!');
}
