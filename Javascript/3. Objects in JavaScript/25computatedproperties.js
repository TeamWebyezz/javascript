// Computed properties   The date is 22 May and the time is 11:42 am

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";


// Taget 
/*
 const obj = {
     objkey1 : "myvalue1",
     objkey2 : "myvalue2",
 }
 */

 const obj = {
     [key1] : value1,// here the key value are computed property not he values
     [key2] : value2
 }
 console.log(obj)