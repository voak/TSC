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
        _this.age = 37;
        return _this;
    }
    return Max;
}(Person));
//Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Defualt";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'Ab';
console.log(plant.species);
plant.species = 'Abcd';
console.log(plant.species);
//Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calCircum = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.calCircum(87.2));
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
//In cases where only a single instance is required, then
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.prop = 'Meant to be readonly';
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only one");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let noinstance = new OnlyOne("The only one"); //Wrong
var right = OnlyOne.getInstance();
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
/*Files can be imported in typescript using thesyntax below
/// <reference path='namespace2.ts' />

The three forward slashes in front are part of the syntax
*/
// Namespaces can be nested
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
    var AnotherWithn;
    (function (AnotherWithn) {
        function printPrompt(msg) {
            if (msg === void 0) { msg = "Print a prompt"; }
            console.log(msg);
        }
        AnotherWithn.printPrompt = printPrompt;
    })(AnotherWithn = MyMath.AnotherWithn || (MyMath.AnotherWithn = {}));
})(MyMath || (MyMath = {}));
var PI = 3.142;
console.log(MyMath.calculateRectangle(2, 43));
console.log(PI);
MyMath.AnotherWithn.printPrompt();
// Files can be imported in typescript using thesyntax below 
// The three forward slashes in front are part of the syntax
//
// Namespaces can be nested 
// Nested namespaces can be handled called directly by name reference or by importing it.
MyMath.AnotherWithn.printPrompt('Call nested namespace by reference');
var nested = MyMath.AnotherWithn;
nested.printPrompt("Print from import");
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircle(width, length) {
        return width * length;
    }
    MyMath.calculateCircle = calculateCircle;
})(MyMath || (MyMath = {}));
console.log(MyMath.calculateCircle(7, 7));
/* Types in typescript*/
/* Let is use for variable delcaration and type assignment*/
///<reference path='Classes.ts'/>
///<reference path='Exerceise1.ts'/>
///<reference path='Execersise2.ts'/>
///<reference path='Exercise3.ts'/>
///<reference path='Namespaces.ts'/>
///<reference path='Namespaces2.ts'/>
///<reference path='Namespaces3.ts'/>
//<reference path='Exerceise1.ts'/>
//<reference path='Exerceise1.ts'/>
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
        if (all) {
            return this.data;
        }
        else {
            return [];
        }
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
//nullable: Cannot be null, this affects uninitialise variables only
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
//Assigning a variable to null before declaration makes the variable of type null not any
