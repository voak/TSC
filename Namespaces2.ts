// Files can be imported in typescript using thesyntax below 
// The three forward slashes in front are part of the syntax
//
// Namespaces can be nested 

// Nested namespaces can be handled called directly by name reference or by importing it.

MyMath.AnotherWithn.printPrompt('Call nested namespace by reference');

import nested = MyMath.AnotherWithn;
nested.printPrompt("Print from import");


namespace MyMath {
    const PI =3.14;

    export function calculateCircle (width: number, length: number) : number{
        return width* length;
    }
}

console.log(MyMath.calculateCircle(7,7));