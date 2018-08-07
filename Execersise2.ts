//Exercise1
const double = (value: number) => value * 2;
console.log(double(10));

//Exercise4
const greet2 = (name: string = "Default Name") =>{
    console.log(name);
}
greet2();
greet2('Anna');

//Exercise3
let numbers = [-3, 33,38, 5];
console.log(Math.min(...numbers))

//Exercise4
let newArray = [55, 20];
Array.prototype.push(newArray, ...numbers);