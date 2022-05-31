// Block scope vs funciton scope   the date is 24 May and the time is 10:47 Pm


{

}// this whole thing in the curly bracket including curly bracket is called block

// let and const are block scope
//example 

{
    let firstName = "Biswajit";
    const secondName = "Majumder"
}
// console.log(firstName);// here the variabls will not show because let and const are the block element they will only work in there block where they are definied 
// console.log(secondName);



{
    let thirdName = "Alexzandra"
    const forthName = "Alexzandrova"
    console.log(thirdName ,forthName);
}

// @@@@@@@@@@@@@@@ BUT VAR IS A FUNCTION SCOPE 

{
    var fifthName = "Carryminati";
    console.log(fifthName == String);
}


{
    console.log(fifthName.toUpperCase);
}