//Exercise1 - Creating a class
class Car {

    public name: string;
    public acceleration: number;

    constructor(name: string){
        this.name = name;
        this.acceleration = 0;
    }

    honk(): void{
        console.log('Tooooooooot');
    }

    accelerate (speed: number): void{
        this.acceleration = this.acceleration + speed
    }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


//Exercise2 - Inheritance

class BaseObjects{
    width: number = 0;
    length: number = 0;
}

class Rectangle extends BaseObjects {
    calcSize(): number {
        return this.width * this.length;
    }
}
let rect = new Rectangle();
rect.width = 5;
rect.length = 2;
console.log(rect.calcSize());

//Exercise3 - Inheritance
class Person_ {
    private _firstName: string = "";
    private configurable: boolean = true;
    private enumerable: boolean = true;

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string){
        if (value.length > 3){
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}

let person_ = new Person_();
console.log(person_.firstName);
person_.firstName = "Ma";
console.log(person_.firstName);
person_.firstName = "Maximilian";
console.log(person_.firstName);