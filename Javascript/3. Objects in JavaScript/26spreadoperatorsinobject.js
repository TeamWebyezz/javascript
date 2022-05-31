//Spread operator in objects  The date is 22 May and the time is 12:34 Pm

// In the objects there can be only 1 key name if we want a key same as another in the same object then the last value will be the one whos value will going to be granted 

const obj1 = {
    key1 : "value1",
    key2 : "value2",
    key1 : "value88"
}
console.log(obj1["key1"]);// here the last value of the key1 is this is a very special feature in the objects 

const obj2 = {
    key1 : "valueunique",
    key3 : "things are going good",
    key7: "hey babes watchu doin"
}

const newObject = {
    ...obj1,...obj2, key69 : "value69"// we can add new key values to it
}
console.log(newObject)// here the key1 's value is "valueunique" 