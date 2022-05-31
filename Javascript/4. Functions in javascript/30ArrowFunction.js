// Arrow Function and Hoisting  The date is 22 May and the time is 9:23 pm
// @@@@@@@@@ IMPORTANT

// Arrow functioning is very easy and important I can declare arrow function like this

const myName = (number1, number2) =>{ /// If there is only one parameter then the parenthesis() is not necesarry 
    console.log(number1 * number2);
}
myName(5,8);


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  HOISTING



// If I call a function before it's even declared then it will work in javascript but it does not work in any other languages 

// like this  

console.log(hoisitingExample());

function hoisitingExample(){
    return 3 + 3;
}
// but it will only works while the function is declared not when function expression not in arrow function


// this calling feature only works in the function declaration thing but in let, var , const thing otherwise it will show error expect in var the console will show the undefinied 