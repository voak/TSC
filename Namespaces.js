"use strict";
/*Files can be imported in typescript using thesyntax below
/// <reference path='namespace2.ts' />

The three forward slashes in front are part of the syntax
*/
// Namespaces can be nested
///<reference path='Namespaces2.ts'/>
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
    var AnotherWithn;
    (function (AnotherWithn) {
        function printPrompt(msg) {
            if (msg === void 0) { msg = "Print a prompt"; }
            console.log(msg);
        }
        AnotherWithn.printPrompt = printPrompt;
    })(AnotherWithn = MyMath.AnotherWithn || (MyMath.AnotherWithn = {}));
})(MyMath || (MyMath = {}));
var PI = 3.142;
console.log(MyMath.calculateRectangle(2, 43));
console.log(PI);
MyMath.AnotherWithn.printPrompt();
