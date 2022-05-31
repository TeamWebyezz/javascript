// Objects inside array The date is 22 May and the time is 1:38 Pm

// Very useful in real world appications

const users = [
    {                   // by using brackets I enterd a object in the array 
        name: "Biswajit", age: 19, place: "Mathur"      // here the object key pairs and their values
    },
    {
        name: "Soumyajit", age: 19, place: "Medinipur"
    },
    {
        name: "Sudip", age: 19, place: "Gangadharpur"
    },
    {
        name: "Sayan", age: 19, place: "Falta"
    }

]
for(let user of users){             // i am using for of loop it's very handy and easy to use here by using let i build a variable named user which is inside the users and it's targeting the key value pairs of the "users" array
    console.log(user.place);  // by using user.place i am getting the access to all the place key value pair contained by the "users" array
}
for(let user of users){
    console.log(user.name);
}
for(let user of users){
    console.log(user.age);
}
//Nested  destructuring 

const [firstname, secondname, thirdname] = users;// to get the access of  array i amm using the square bracke otherwise if it was a object then i would have used the curly brackets there will be no ""(double quotation in the array destucturing)
console.log(firstname, secondname,thirdname);

const [ {name: myname}, , {place:thisplace} ] = users;// here first using the third  bracket i am accessing the users array and inside the array accesing using the second bracket i am accessing the object key pairs here we can get desired or custom variable name that we want usign :examplename after the exact key pair name as in the user array objects 

console.log(myname , thisplace);
