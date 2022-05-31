// Every method the date is 29May and the  time is 11:56am

const numbers = [2,6,4,10,8];

const eveniseven=numbers.every((number)=>{
    return number % 2 === 0;
})
console.log(eveniseven)


const numbers2 = [2,6,4,10,5,8];

const evenIsEven=numbers2.every((number)=>{
    return number % 2 === 0;
})
console.log(evenIsEven)
//it checks every value then it all are same then it will send true 


const userCart = [
    {productId: 1, productName: "Mobile", Price: 23000},
    {productId: 2, productName: "Fridge", Price: 25000},
    {productId: 3, productName: "Fan", Price: 3000}
]

const lessThan = userCart.every((cartItem) => {
   return cartItem.price < 30000}
    )
console.log(lessThan)


// Some method 


const num =[ 1,4,,2,6,6,3,7,2,5,9,2,4,8,2,5,9]

console.log(num.length)
console.log(num.length-1)
console.log(num[7])

const isodd = num.some((numb) => numb % 2 ===1)
console.log(isodd)