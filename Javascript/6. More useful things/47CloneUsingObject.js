// CLONE USING OBJECT.ASSIGN    THE DATE IS 29 OF MAY AND THE TIME IS 4:13 PM 
const obj = {
    key1 : "value1",
    key2 :"value2"
}

const obj2 = obj;

obj2.key3 = "value3";
console.log(obj);

obj2.key4 = Object.assign({}, obj);
console.log(obj2)