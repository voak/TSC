

/* Types in typescript*/
/* Let is use for variable delcaration and type assignment*/

let myName = 'Max';
//myName = 28; // Will return an error because the the type of my name is string and not number

let myAge = 27.5 // Type script does not have number types, therefore all numbers are number

let hasHobbies = false;  //Does not accept numeric representation of boolean


let myRealAge; //Not asssigning an immediate type/value implies the type 'any' or such variable
myRealAge = 27;
myRealAge = '27';


let declared: string //Implies a string variable ONLY


//Array
let hobbies = ['Cooking', 'Sports'];
console.log(hobbies[0]);
console.log(typeof hobbies);

//hobbies[3] = 100; This line fails because hobbies was declared as array of string

let many: any[]; // Allows 'many' to contain any data type


//Tuples: Arrays with mixed types
let address = ["Superstreet", 99];  //Without assigning a type,  declare the array to be of type any

address[0] = 63737;
console.log(address[0]);

let address2: [string, number] = ["Superstreet", 99]; //Is fixing multiple data type in an array


//Enums
enum Color {
    Green, //0
    Black = 100, //1
    Red //2
}


let myColor: Color = Color.Green;
console.log(myColor);

console.log(Color.Black);
console.log(Color.Red);


//function
function returnMyName(): string{
    return myName;
}

console.log(returnMyName());

//void
function sayHello(): void {
    console.log('Hello');
}

//Assigning types to function parameters
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

console.log(multiply(2,7));


let myMultiply: (val1: number, val2:number) => number;

myMultiply = multiply;

//Object
let userData: {name: string, age: number} = {
    name: "Max",
    age: 27
}
//Name of the variable is very important in ojects, because it uses reference. The order is not important

//complex object
let complex: {data: number[], output:(all: boolean) => number[]} = {
    data:[100,2.99,10],
    output: function (all: boolean): number[] {

        if(all){
            return this.data;
        }
        else{
            return [];
        }
    }
}


//type alias: The 'type' allows creation of complex type then assign it

type complexAliase = {data: number[], output:(all: boolean) => number[]}

let complex2: complexAliase;

//Union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';

//Check types

let finalValue = 'A string';

if (typeof finalValue == 'string'){
    console.log("Final value is a number");
}

//never type: This type return nothing but not void. It more like terminates execution at this point
function neverReturns(): never{
    throw new Error('An error!');
}


//nullable: Cannot be null, this affects uninitialise variables only
let canBeNull: null | number = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

//Assigning a variable to null before declaration makes the variable of type null not any