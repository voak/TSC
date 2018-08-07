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