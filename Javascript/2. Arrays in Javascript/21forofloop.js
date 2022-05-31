// For of loop in array     21 May 2022 and the time is 11:04

const fruits = ["apple", "pineapple", "banana", "grapes","lil-bunty"];// a normal array 
const newFruit = [];
for(let fruit of fruits){// after using for I used let to declare a new variable called fruit of the fruits 
    newFruit.push(fruit.toUpperCase());
}
console.log(newFruit);



const theFruit = ["apple", "pineapple", "banana", "grapes","lil-bunty"];
for(let index in theFruit){
    console.log(index);
}