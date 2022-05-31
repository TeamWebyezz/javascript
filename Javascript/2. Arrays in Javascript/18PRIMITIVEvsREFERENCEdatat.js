// PRIMITIVE VS REFERENCE DATA TYPE IMPORTANT      3MAY TIME 5:48

let num1 = 6;
let num2 = num1;

console.log("The value of num1 is", num1);
console.log("The value of num2 is", num2);
// Now let's increase the num1
num1++;
console.log("After increasing the num1");
console.log("The value of num1 is", num1);
console.log("The value of num2 is", num2);// This is primitive

// Reference type 

let array1  = ["item1", "item2"];
let array2  = array1;
console.log("The array 1 is ", array1);
console.log("The array 2 is ", array2);

// After incresing an item to the array1

array1.push("item3");
console.log("After Incrasing a item in arry 1");
console.log("The array 1 is ", array1);
console.log("The array 2 is ", array2);


// primitive data gets stored in stack what is stack
// reference data gets stored in the heap and pointer gets stored in the stack and the pointer had the heap address

//=======================HOW TO CLONE ARRAY================

//cheking if a array has the same heap address like another array

console.log(array1 === array2); // if it shows true then yes array1 and array2 has the same heap address 


let array3 = array1.slice(0);
console.log(array3);
console.log(array1 === array3);

let array4 = [].concat(array1);
console.log(array4)

//there is a new to to do the same thing and the technique is spread operator

let array5 = [...array1]; // 1st open third bracke and then put three dot and then the array you want to have items of example [...exampleArray]
console.log(array5);


// work make a array which will have every items of array1 and also have some extra items in it

let array6 = array1.slice(0).concat(["item4", "item5"]);
console.log(array6);


let array7 = [...array1 ,"item6", "iteam7" ];// after spreding the array then add the extra items that you want to add otherwise it wont work/
console.log(array7);

let array8 = [...array5,...array7];
console.log(array8);