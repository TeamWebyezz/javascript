// Important methods of arry 

// @@@@@@@@@@@@@@@@@@@@@  .forEach      @@@@@@@@@@@@@@@@@@@@@@@

const numbers = [4,5,6,1,7,8,9,25,8,4,1,6,77,]

function multiplyBy(number,index){
    console.log(`The index number is `,index + ` and the number * 2 is number` ,number *2 )
}
// multiplyBy(numbers[2],2)

for(let i = 0; i < numbers.length; i++){
    multiplyBy(numbers[i], i)
}


// but the .forEach will come like a god 

numbers.forEach(multiplyBy);// for each will run the function for all the array items 
// forEach gives argument 


// or we can do like this 
numbers.forEach(function(number,){
    console.log(number * 3);
})

// real life example 

const users = [
    { firstName: "Biswajt", age: 19},
    { firstName: "Soumyajit", age: 19},
    { firstName: "Prosenjit", age: 19},
    { firstName: "Idrajit", age: 19}
]

users.forEach(function(user){
    console.log(user.firstName);
})