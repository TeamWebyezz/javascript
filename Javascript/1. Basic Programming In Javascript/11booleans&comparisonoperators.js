// Booleans and comparison  16April 9:41 PM
//As the name suggests comparison operator is for comparing.
// In cs, boolean is a data type that has only two possible values true and false.

let num1 = 6;
let num2 = 9;

console.log(num1 > num2);// It shows false in console output.

//   == ( EQUAL TO OPERATOR) it only checks values not datatypes. Like if we try to prove at sting 7 and int 7 value same then it will show true cause it checks only the value not datatypes. It only works in the js not in any other languages.

let num3 = "7";
let num4 = 7;

console.log(num3 == num4); // It shows true in the console output.

// Now if we want to check also the data type and the value at the same time then we have to use the triple equal to sign === for that.

let num5 = "8";
let num6 = "8";

console.log(num5 === num6);// It shows true in the console output.

//!= (NOT EQUAL TO but not checks data type)    vs   !== (NOT EQUAL TO but checks data type)

console.log(num5 != num6); // It is showing false means saying we wrote it wrong.
console.log(num3 != num4);
console.log(num3 !== num4);
