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
newArray.push(...numbers);
console.log(newArray);

//Exsercise5
let testResults: number[] = [3.89, 2.99,1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

//Exercise6
let scientist: {firstName: string, experience: number} = {firstName: 'Will', experience: 12};
const {firstName, experience} = scientist; 
console.log(firstName, experience);
