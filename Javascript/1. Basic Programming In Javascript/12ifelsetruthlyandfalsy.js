//If else condition       16 April 10:56

let age = 17;

if(age > 18){
    console.log("User can play RR");
}
else{
    console.log("User can't play play RR");
}

let num = 15;

if(num %2 == 0){
    console.log("It is a Even number");
}
else{
    console.log("It is a odd number");
}

//          Falsy values 
let camelCase = "";
if(camelCase){
    console.log(camelCase);
}
else{
    console.log("There is no output");
}// In this case the output will be the else cause js gives a false value when the sting value is 0 of nothing, this is called falsy value.
let harpThing = "Biswajit";
if(harpThing){
    console.log(harpThing);
}
else{
    console.log("There is no output");
} // here all the value are truthly values.



//  Ternary operator( It is also called the conditional operator)
//example workes with ? :  IMPORTANT
let age1 = 4;
let drink = age1 > 5 ? "Coffee" : "milk";
console.log(drink);