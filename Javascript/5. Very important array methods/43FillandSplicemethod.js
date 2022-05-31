// Fill method the date is 28 may and the time is 2:24 pm

const myArray  = new Array(30).fill(666)
console.log(myArray)

//another way 

const newArray  = [4,7,2,5,7,22,5,73,2,56,6]
newArray.fill(666, 3,7)// the first one tis value then starting index and the ending index 
console.log(newArray)


// spice method 
// splice methon mainly used for insert or delete any items in an array

 
let deletedIteam = newArray.splice(2,1)// the  first value is the starting item (means from where the deleting will start and the second valuee is how many items is going to delete )
console.log(newArray)
console.log(deletedIteam)


newArray.splice(2,1,"this is item")
console.log(newArray)