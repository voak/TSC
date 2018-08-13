"use strict";
// Files can be imported in typescript using thesyntax below 
// The three forward slashes in front are part of the syntax
//
// Namespaces can be nested 
// Nested namespaces can be handled called directly by name reference or by importing it.
MyMath.AnotherWithn.printPrompt('Call nested namespace by reference');
var nested = MyMath.AnotherWithn;
nested.printPrompt("Print from import");
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircle(width, length) {
        return width * length;
    }
    MyMath.calculateCircle = calculateCircle;
})(MyMath || (MyMath = {}));
console.log(MyMath.calculateCircle(7, 7));
console.log(PI);
