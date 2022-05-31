// Sort Method this is interesting mate and the time is 10:38 and the date is 28 May 

// sort chages the original array not like map foreach reduce fillter

const numbers = [3,9,4,1,5,3,8];
const sortNumbers = numbers.sort();
console.log(sortNumbers);

const numb = [6,3,8,6,3,8,3,7,3];
const sortedNumb = numb.sort()
console.log(sortedNumb);


const newPlaces = ["Delhi", "Denmatk", "Dostipur", "Damdam","Digha", "Dinpur"]
const sortedPlaces = newPlaces.sort();
console.log(sortedPlaces);


const names = ["Biswajit", "harshit", "Aninda", "Capital"];

const sortNames = names.sort();
console.log(sortNames);


// harshit's method 


const num = [5,9,1200,410,3000];
const newNum = num.sort((a,b) => {
    return a -b ;// a-b will sort is assendingly 
})
console.log(newNum);



// price lowToHigh and highToLow

const products = [
    {prodductId:1 , productName: "p1", price: 300},
    {prodductId:2 , productName: "p2", price: 3200},
    {prodductId:3 , productName: "p3", price: 806},
    {prodductId:4 , productName: "p4", price: 8001},
]
const lowToHigh = products.sort((a,b) => {
    return a.price -b.price
})
console.log(lowToHigh)

const HighToLow = products.sort((a,b) => {
    return b.price - a.price;
})
console.log(HighToLow);
