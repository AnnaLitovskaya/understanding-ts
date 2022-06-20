"use strict";
function add1(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult1 = true;
var resultPhrase = 'Result is: ';
var result1 = add1(number1, number2, printResult1, resultPhrase);
console.log(result);
//# sourceMappingURL=basics.js.map