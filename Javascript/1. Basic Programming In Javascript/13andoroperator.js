// And(&&) Or(||) operator    21 April 2:42 Pm

let firstName = "Biswajit";
let age = 19;

if(firstName[0] === "B"){
    console.log("Your Name starts with B");
}
if(age > 18){
    console.log("Your age is greater that 18 and you can drive");
}

// We can do this in  another way like this 

if(firstName[0] === "B"  && age > 18){
    console.log("Your name starts with B and you are above 18 so you can drive mate");
}
if(firstName[0] === "H" || age > 18){
    console.log("There is something wrong so you can't drive not now");
}

