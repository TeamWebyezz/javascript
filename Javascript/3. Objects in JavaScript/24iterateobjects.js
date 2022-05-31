// How to iterate objects The date is 22 May and the time is 11:34 

const person = {
    name: "Biswajit",
    age: 19,
    place: "Mathur",
    email: "biswajitmajumderjee@gmail.com"
}

for(let index in person){
    console.log(person[index]); // here i used the [ ] because the preveous lesson it is accecing the value of the index that's why 
    
}
for(let key in person){
    console.log(key);

}
for(let key in person){
    console.log(key, ":", person[key]);

}