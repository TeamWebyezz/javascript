//Undefined  15 April 11:00 AM 


let firstName;
console.log(typeof firstName);
firstName = "Biswjit";
console.log(typeof firstName);

let myVariable = null;
console.log(myVariable);
myVariable = "Biswajit"
console.log(myVariable , typeof myVariable);
// bit if we type this 
console.log(typeof null); // In output it will show object ,in js object is a different data type.... it shows this cause this is a bug no one tried to solve this cause then many coders code will go on blind LOL ...
// no need to worry but we have to know that this is a bug....


//              BigInt

//we know that we can save number using var but how big number we can save lets check out
let myNumber = 123;
console.log(Number.MAX_SAFE_INTEGER); // it will show 9007199254740991 this number we can save upto this number in a int variable of the js
//and if we have to use a bigger number than 9007199254740991, we will use the BigInt 
let thisNumber = BigInt(123041290483430285103948013481394382);
// like this 
let firstNum = BigInt(134676);
let secondNum = BigInt(24246);
console.log(firstNum * secondNum);// we can run math operations between two BigInt but not a single int and anohter BigInt otherwise it will give error