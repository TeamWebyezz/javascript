// String concatenation  14th march 9:54



let string1 = "Biswajit";
let string2 = "Majumder";

// concatenation means adding or connecting them 
let fullName = string1 + string2;
console.log(fullName);
// now to add space I will add a sting that contains a space like this 
let fullName2 = string1 + " " + string2;
console.log(fullName2);

// now a little tricky thing 
let age = "20";
let age1 = "22";

let newAge = age + age1;
console.log(newAge);// it will not sum the value cause it it string now now if we want to sum up those to number then we will change the string to number like this

console.log(+age + +age1);// now it will sum the numbers 
console.log(typeof (+age + +age));
