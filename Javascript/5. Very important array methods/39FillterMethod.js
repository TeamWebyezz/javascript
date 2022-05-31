// Filter method   the date is 28th of may and the time is 10:30 


const numbers = [1,3,4,2,5,7,7]

const isEven = function(number){
    return number % 2 === 0 
}

const evenNumbers=numbers.filter(isEven)
console.log(evenNumbers)

// Reduce method 

const numbers2 = [1,6,2,4,8]
// target is to make the sum of all numbers 

const sum = numbers2.reduce((accumulator,currentValue) => {
    return accumulator + currentValue
}, 100);
console.log(sum)

// accumulator   currentValue  return 
//1                 6            7
//7                 2           9
//9                 4           13
// like this is reduce the accumulator becomes the last retun value 


const userCart = [
    {productId: 1, productName: "Mobile", price: 120000 },
    {productId: 2, productName: "Laptop", price: 250000 },
    {productId: 3, productName: "Tv", price: 1600000 },
]

const userPrice = userCart.reduce((totalPrice, caurrentproduct)   =>    {return totalPrice + caurrentproduct.price}, 0
    
) 
console.log(userPrice)

// reduct method is important check it more clearly 

