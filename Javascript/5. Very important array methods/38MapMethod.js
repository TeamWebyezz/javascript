// Map Method  the very very important method will use it many places  the date is 27 of May and the time is 10:02 Pm 


const numbers = [3,6,2,6,2,5]

const square = function(number){
    return number * number; // it is crusial to return in a map 
}


const squareNumber = numbers.map(square);// we could have made functions in the map ()
console.log(squareNumber);


// real time examples



const users = [
    {firstName: "Biswajit", age: 19},
    {firstName: "Soumyajit", age: 19},
    {firstName: "Prosenjit", age: 19},
    {firstName: "Indrajit", age: 19},
]

const names  = users.map(function(name){
    return name.firstName;
})
console.log(names)