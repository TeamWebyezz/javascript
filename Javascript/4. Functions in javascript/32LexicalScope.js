// Lexical Scope The date is 24 May and the time is 10:20 pm 

function myApp(){
    const myVar = "value"; 
    function myFunc(){
        const myVar = "value69";
        console.log(myVar);// here while the value is in the myFanc function it will show the value69 but if we comment out the value it will show the value output which is in the upper cause in javascript the const will look for lexical ? not sure look in details 
    }
    const myFunc2 = function(){

    }

    const myFunc3 = () => {

    }
    myFunc();
}
myApp()