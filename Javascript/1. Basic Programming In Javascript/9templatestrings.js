
// template string  15 April 10:59 am
// Man I am touching the js after 1 month ...shame 


let age = 19;
let nicki = "Biswajit";

//My name is Biswajit and my age is 19 ---- print that
console.log("My name is "+ nicki + " and my age is " + age);// so here i usued + sign to add the sting and using when i needed it the thing here to give attention about in console.log the thing that will be in side the double quotetion, will get print and using + sign added the string variable and  got the result I have been asked for//  //this is very tidious

// we will do it using the template method
let aboutMe = `My name is ${nicki} and my age is ${age}`;
// we will use back ticks(` `) and between the back ticks there will be the thing that we want and using ${}( dollar and curly brackes) we can recall any sstring variable.
console.log(aboutMe);