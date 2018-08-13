/*Files can be imported in typescript using thesyntax below
/// <reference path='namespace2.ts' />

The three forward slashes in front are part of the syntax
*/

// Namespaces can be nested

namespace MyMath {
    const PI =3.14;

    export function calculateRectangle (width: number, length: number) : number{
        return width* length;
    }

    export namespace AnotherWithn {
         export function printPrompt(msg: string = "Print a prompt") {
            console.log(msg);
         }
    }
}

const PI = 3.142;

console.log(MyMath.calculateRectangle(2,43));
console.log(PI);  
MyMath.AnotherWithn.printPrompt();