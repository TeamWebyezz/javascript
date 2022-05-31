// Function declaration the time is 2:13 pm and date is 22May 
// i am writing this with only using my one hand



    //Function is like good obidient servent they will do everything we instruct ..... but the instruction should have to be very clear and good....... functions can help another function

    // By using function keyword we can declate a function like this 


function helloWorld(){
    console.log("Hello World hello there this is so good to talk to you");
}


// After declaring the function we have to recall or run or invoke the function to see or use the 

helloWorld();// we can call function as many time as we want 

// we mainly use the funcitons to reduce the repetitive works because
//DRY      == Don't Repeat Yourself



// Function can return values like

function twoplustwo(){
    return 2+2;
}

console.log(twoplustwo());


// I will make the funciton more usabel like this 

function sums(num1, num2, num3){  // the brackets things are parameters 
    return num1 + num2 + num3 ;
}
const returnValue = sums(2,5,8);// here the brackets things are arguments
console.log(sums(2,5,8));
// and if there is one less value then it will output the NaN 
// because the last one will be the undefinied.
// Function can returm anythings

function isEven(number){
    if(number % 2 === 0){
        console.log("true");
    }else{
        console.log("False");
    }
}
isEven(7);

// Optimised version

function isodd(number){
    console.log(number % 2 === 1);
}
isodd(7)


// Make a function that will take string and return the value of first character

function yourArray(array){
    console.log(array[0]);
}

yourArray(["Biswajit","thigns"]);



// will check it later i did not understand it clearly


function giveIndex(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

const myArray = [1,4,6,7,2,8,];
// console.log(giveIndex(myArray,2));
const ans = giveIndex(myArray, 8);
console.log(ans);


// Function expresion 


const singThat = function(){// this is called function expression
    console.log("Let the skyfall");
}
singThat();
// mostly we use const 