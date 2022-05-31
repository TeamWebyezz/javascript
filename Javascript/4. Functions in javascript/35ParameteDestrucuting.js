// PATAMETER DESTRUCTURING   VERY IMPORTANT    VARY MUCH USED IN THE REACT JS   THE DATE IS 25 OF MAY AND THE TIME IS 11:36 PM 



//Mostly we use parameter destructuring in objects 



const myObj1 = {
    firstName: "Biswajit",
    gender: "Male"
}

function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
    // but what if here is an  another instruction  like this 
    console.log(obj.age);// it will show undefinied 
}
printDetails(myObj1);

// TO TACKLE THAT WE USE DESTRUCTURING


function printDetails2(firstName, gender, age){
    console.log(firstName)
    console.log(gender)
    console.log(age)
}
printDetails2("Biswajit", "Male", 500)



///    @@@@@@@@@@@@@@@  FUNCTION CALL BACKS 

function tyringFun(callback){
    console.log(callback);
    callback();
}

function makingFun(){
    console.log("Inside a funtion funny huh");
}

tyringFun(makingFun);
