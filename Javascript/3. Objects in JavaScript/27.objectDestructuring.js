//Object destructuring The Date is 22 May and the time is 1:17 Pm

const obj1 = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
    key4 : "value4"
}

// let valuename = obj1.key1;
// console.log(valuename)

// the shortcut or the destructuring is this 

const {key1, key2} = obj1;// here we have to put the key value names to get the values of that key value pair other wise it wont work 
// console.log(bandname, famous_song);


const {key1:bandname, key2:famous_song, ...restthings} = obj1;//  to get custom variable or constant name then type : (colon) and then enter the name i want ...
console.log(bandname, famous_song);

console.log(restthings);


