// types of operator

//data types (Primitive data types)
//string "biswajit"
//number like 1, 3 , 5 
//booleans
//undefined
//null
//BigInt
//symbol

let age = 21;
console.log(typeof age);   // typeof will be in lowercase and after typeof there will be a space
let firstName = "Biswajit";
console.log(typeof firstName);

//       convert number into string.
console.log(age + "");  // 21 has became a string from number when I used the + "" thing and if we want to see the typeof 
age = age + "";// this is the short cut
console.log(typeof age);


//      sting to number .
let newStar = +"432";// when We add + before any string it becames the number it's a shortcut
console.log(typeof newStar)

let thingStop = +"Biswajit";
console.log(typeof thingStop);// it also works on abphabetic strings 


//  exact or the big rule for changing the typeof 

let age1 = 21;
age1 = String(age1);
console.log(typeof age1);

let jalexRosa = "Biswajit"
jalexRosa = Number(jalexRosa);
console.log(typeof jalexRosa);
