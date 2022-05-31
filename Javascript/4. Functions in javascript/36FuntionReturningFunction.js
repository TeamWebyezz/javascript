// FUNCTION RETURNING FUNCTION     THE DATE IS 26 MAY AND THE TIME IS 7:46 PM 


function myFanc(){
    console.log("A!")

    function myFunc2(){
        console.log("B!")
    }
    return myFunc2   // here the function  returing a function 
}  

let returnedValue = myFanc();
console.log(returnedValue)
returnedValue();


