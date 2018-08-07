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

const maxLevels  = 100;
console.log(maxLevels);

let variable = "String content";

function reset(){
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);