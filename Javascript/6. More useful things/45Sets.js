// Sets (it is iterable) the date is 28may and the time is 3:10pm

//




const numbers = new Set([1,2,3]);
console.log(numbers)// we cant save duplicate in sets means there will by one 1, one 2, one 3 (unique items only )

// no Index based access 
// Order is not guranteed 
// we can add different type of data types in 

numbers.add(1,3)
console.log(numbers)// not added 
numbers.add(["item","item2"])
console.log(numbers)
numbers.delete(1,) // first one is the value and the don't know the second one
console.log(numbers)
if(numbers.has(1)){
    console.log("it is present")
}else{
    console.log("not present");
}

for(let number of numbers)[
    console.log(number)
]


// we can use it to find unique elements like this

const myArray = [1,7,2,5,2,7,9,4,2,7,3,9,2,4,5,1,7,2,3,3,8,1,,4,5,7,9,0,9,7,5,8,9,6,4,7,4,,3,2,7,4,3,2];

const sortedArray = myArray.sort()
console.log(sortedArray)

let uniqueItems = new Set(myArray)
console.log(uniqueItems);
// myArray will remail same
length = 0;
for(let elements of myArray){
    length++
}