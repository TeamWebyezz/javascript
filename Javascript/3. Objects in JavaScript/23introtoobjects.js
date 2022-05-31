// Intro to objects The date is 21 May and the time is 11:30 am

// Array are no sufficient for real world data
// Objects don't have 
// Object is a reference type data



// How to create objects 

const person = {name: "Biswajit" , age: 19}// name and age we call them propertys or key value pairs
console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.age);

// We can add array to a object also 

const company = {
    names:["Apple","Samsung", "Bugatti", "Lamborghini"]
}
console.log(company.names);

// How to add key value pair to objects

person.gender = "male";
console.log(person)
// or we can use this 
person["place"] = "Mathur"; 

// In js the keys or the propertys are by default stings

// we can use alternative of . to access the key value like

console.log(person["age"]);// we have to sting other wise it will show error
console.log(person);// we have to sting other wise it will show error


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Dot(.) vs Backetnotation @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2

        //========= 1 st difference
// So the thing is if I use (.) then giving space a is not possible it will give error like this 
const color = {
    "background color": "white"

}

// console.log(color.background color)  //// see this is giving a error 
// but we can use backetnotation
console.log(color["background color"])

        //======== 2nd difference

const key = "email";




const newPerson = {
    name: "Tasya Alexzandra",
    age: 19,
    place: "Russia",
    gender: "Female"

}

// newPerson["key"] = "tasyaalexzandra@gmail.com"; 
newPerson[key] = "tasyaalexzandra@gmail.com";  // In this case don't use the ""( double quotation)  and if we use ""( double quotation ) then the value of key cosntant will not print the name of the cosntant is going to print 
console.log(newPerson)

