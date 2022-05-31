// Introduction to array  3 May time 3:9 pm

        // The number strings are primitive data types 
        //but array is reference type data type

        // Definition of Array        
                // Array is the order collection of items.




        // =====================Creating an array======================//


let fruits = ["apple", "mango" , "grapes"];
console.log(fruits[2])  // we can save any time of data type in an array// 


// example 
 let mixedFruits = ["mango", "things", 1 , 4 ,5 ,7 ,"clanguage"];
 console.log(mixedFruits[4])
 console.log(mixedFruits)

let obj = [];// this is object litreal



// If I want to change a index then we havo to do this //

let companys = ["skybags", "classmate", "samsung", "apple", "roadstar"];
console.log(companys[0]);
companys[0] = "american-turister";
console.log(companys[0]);



// In javascript we call referece data types object //
//so array is an object//

console.log(typeof(companys));
// it will show that is is an object //
// then how to know that this is an array time data type//
console.log(Array.isArray(companys));// if it is an array then it will show true, else it will show false.//




    //========================== Array .push .pop ====================================//

            // Array .push helps to add data/items in an existing array


    // example        
// let companys = ["skybags", "classmate", "samsung", "apple", "roadstar"];
console.log(companys);

// to use array push do this //
companys.push("gucci");
console.log(companys);

// The same way .pop removes from an array//

// example
// let companys = ["skybags", "classmate", "samsung", "apple", "roadstar"];


let poppedCompany = companys.pop();// pop removes from last and they it can return the data to use it anywhere//
console.log(companys);

console.log("The popped company is", poppedCompany);


// to add a data type in front of an array use .unshift

companys.unshift("Prada");
console.log(companys)

//.shift//
let removedCompany = companys.shift(); // .shift removes the 0th element of an array and it will also give back the data

console.log(companys)

console.log("The removed company is", removedCompany);

// Note .push and .pop is faster compared to the .shift and .unshift//