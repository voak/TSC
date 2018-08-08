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
    }
}