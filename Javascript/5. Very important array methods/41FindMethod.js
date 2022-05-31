// Find Methods the date is 28 May and the time is 11 :35 am

const petArray = ["Lion", "Tiger", "Dog", "Cat", "Parrot"]

const myPet = petArray.find((String) => {
    return String.length === 5;

})
console.log(myPet);



// real life example

const users = [
    {userId:1, userName:"Biswajit"},
    {userId:2, userName:"Prosenjit"},
    {userId:3, userName:"Soumyajit"},
    {userId:4, userName:"Indrajit"},
]

const user = users.find((userIs)=>{// arrow function here 
    return userIs.userId === 3;
})
console.log(user)