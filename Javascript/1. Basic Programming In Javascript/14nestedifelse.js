//Nested if else    21 April 2:51

//Making a game where 19 is the winning number and user have to guess it


let winningNumber = 19;
let userGuess = +prompt("Guess the right number");//promt only takes input in string data type( and if we add a +(plus) sign in front of the promt then it will take number data type)
console.log(typeof userGuess , userGuess);

if(userGuess === 19){
    console.log("Your guess is right");
   
}else{
    if(userGuess > 15 && userGuess < 20){
        console.log("Your guess is very close");
    }
    else{
        console.log("Your guess is high");
    }
}
 

// If 
//else if 
// else if 
// else if 
//else



let tempInDegree = 50;

if(tempInDegree < 0){
    console.log("Extreamy cold outside");
}else if(tempInDegree < 16){
    console.log("Is's cold outside");

}else if(tempInDegree < 25){
    console.log("Weather is ok");
}else if(tempInDegree < 35){
    console.log("Let's go for a swim");
}else if(tempInDegree < 45){
    console.log("Turn of the ac");
}else(tempInDegree >= 50);{
    console.log("Too hot");
}

