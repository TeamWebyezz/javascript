// Default parameter and the time is 10:57 pm and the date is 24 May 


function addTwo(a,b = 0){// why here i am using the b = 0 so I am using this b = 0 because if the b is somehow undefined then the value of b will be 0 and the funciton will run properly 
    return a + b;
}
console.log(addTwo(4,7));
console.log(addTwo(3));
function ci(a){
    console.log(a);
}

ci(`I made my first semi- automatic thing`)


// REST PARAMETERS 

// here only 3 parameter can be used but what if there is many parameter then what to fo

function myFunc(a,b,c){
    ci(`a is ${a}`)
    ci(`b is ${b}`)
    ci(`c is ${c}`)
}

myFunc(1,6,9)


function myFunc2(a,b,...c){// here I used ...c (three dot) and what it does it creates a array that will save the rest of the parameters 
    ci(`a is ${a}`) // to add any variable we have to use back tick ` and then ${}
    ci(`b is ${b}`)
    ci(`c is ${c}`);
}
myFunc2(3,5,62,3,6,2,5,1,6,2,3,53)



function sumof(...numbers){
    console.log(numbers);
    console.log(typeof numbers);
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total
}    

console.log(sumof(2,7,2,2,5,1,7))