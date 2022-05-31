// Some useful methods of string 14 th march 9:11 pm 
// trim()
// toUpperCase()
// toLowerCase()
// slice()

let nicki = "     Biswajit     ";
console.log(nicki.length);
// to remove the spaces of the string we have to use trim() but it don't change the variable cause variable is immutable, then what it does it creats a new strig to the same name variable like this 
newString = nicki.trim();
console.log(newString);
console.log(newString.length);
// or we can change the same variable like this 
// nicki = nicki.trim();


//          toUpperCase()
let workShop = "mynameisbiswajit";
console.log(workShop.toUpperCase());// it makes every letter of the string uppercase
let myName = "thIs myy thing IS woek";
console.log(myName.toUpperCase());

//          toLowerCase()
myName = myName.toUpperCase();    // i changed  the variable
console.log(myName.toLowerCase());

//          slice()
// two things to remember in the slice 
// Start index  and End index
let newSlice = "Biswajit"
console.log(newSlice.slice(0,4));// it does not give the end index it stop before it remember that
console.log(newSlice.slice(1));// it will start form 1 and continue to go on mate..