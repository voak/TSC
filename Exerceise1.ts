type bA = {money: number, deposit: (val:number)=>void};

let bankAccount : bA = {
    money: 2000,
    deposit(value: number):void{
        this.money += value;
    }
};

let myself : {name:string, bankAccount: bA, hobbies: string[]} = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
console.log(myself.bankAccount.money);

let variable = "String content";

function reset(){
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);


//Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10,3));

const multiplier = (number1: number, number2: number) => number1 * number2;
console.log(multiplier(2,5));

const greet = () => {
    console.log("Hello");
}

greet();


//Defualt values

const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
}

countdown();
countdown(20);


//Spread
const spread = [1,3,5,6];
console.log('Max Value is '+Math.max(...spread));


//Rest Operator
function makeArray (...args: number[]){
    return args;
}

console.log(makeArray(1,2));

//Destructuring Array
console.log("DESTRUCTURING ARRAY");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

//Destructuring Objects
console.log("DESTRUCTURING OBJECTS");
const useData = {userName: 'Max', age: 27}
const {userName, age } =useData;
console.log(userName, age);

//An alias can be assigned to reference the variables
const {userName: Name, age: Age} =useData;
console.log(Name, Age);

//Template Literals
const Name2 = 'Max';
const greeting = `This is a heading
I'm ${userName}
`;
console.log(greeting);