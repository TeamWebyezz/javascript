// Array destructing  The date is 21 May 2022 and the time is 11:18 am

const myArray = ["value1", "value2", "value3"];

let myValue1 = myArray[0];
let myValue2 = myArray[1];
console.log(myValue1,
    myValue2)
    // But there is a short cut in Javascript

let [myVar1, myVar2] = myArray;
console.log(myVar1 , myVar2)

// if there is only 1 value in the const array then the myVar2 thing will be undefined 

// And if we want to skip any array value then we can use the myVar1,,myVar2 then in myVar2 the 2nd index value is going to be saved


// let [myVar1, myVar2 ...myNewArray] = myArray; by usnig three dot ... and giving a variable name after the three dot I can create a new array which will consist the left over array values  