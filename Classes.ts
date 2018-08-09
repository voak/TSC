class Person {
    public name: string;
    private type: string;
    protected age: number;
    
    constructor(name: string, age: number, public username: string){
        this.name = name;
        this.age = age;
    }

    printAge(){
        console.log(this.age);
    }

    setType(type:string){
        this.type = type;
        console.log(this.type);
    }
}


const person = new Person('Max', 27, 'max');
console.log(person.name, person.username);
person.printAge()
person.setType("Cool Guy");

//Inheritance
class Max extends Person {
    name = 'Maxi';

    constructor(name: string){
        super(name, age, name);
        this.age = 37; 
    }
}


//Getters and Setters

class Plant {

    private _species: string = "Default";
    set species(value:string) {
        if(value.length > 3){
            this._species = value;
        }
        else{
            this._species = "Defualt";
        }
    }

    get species() {
        return this._species;
    }
}


let plant = new Plant();
console.log(plant.species);

plant.species = 'Ab';
console.log(plant.species);

plant.species = 'Abcd';
console.log(plant.species);

//Static Properties & Methods
class Helpers {
    static PI: number = 3.14;

    static calCircum(diameter: number) : number{
        return this.PI * diameter;
    }
}

console.log(Helpers.PI);
console.log(Helpers.calCircum(87.2));

abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

//In cases where only a single instance is required, then

class OnlyOne {

    public static instance: OnlyOne;

    private constructor(name: string){}

    static getInstance() {
        if(!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne("The Only one");
        }
        return OnlyOne.instance;
    }
}

//let noinstance = new OnlyOne("The only one"); //Wrong
let right = OnlyOne.getInstance();