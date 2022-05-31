// MAPS ARE ITERABLE            THE DATE IS 29 MAY AND THE TIME IS 1:14PM 

// in objects literal the keys are string 95 % of the time and 5 % symbol 

// map saves key value pair 


const person = new Map();

person.set('firstName', "Biswajit"); // we can use double or single qutoes no problem 
person.set('age', 19);

// in map we can save any datatypes 
person.set(1 , 'one');
console.log(person);

// How to access the key pairs 

console.log(person.get('firstName'))
console.log(person.keys());


for(let key of person){
    console.log(key)
    console.log(typeof key);
}

// object is not iterable
// order garunted 


const newPerosn = new Map([['firstName', 'Biswajit'], ['age', 9], ['place', 'Mathur']]);

console.log(newPerosn);

// Real life example 
e