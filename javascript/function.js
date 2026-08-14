/*
Function: set of instructions
Syntax:
()->parathesis
function functionName/Variables (optional parameters){
    instructions can be written here
}
*/

function greet(name){
    console.log("Hello " +name);
}
//argument
greet("Ram");


function sum(value1, value2 = 0){
    console.log(value1+value2);
}
sum(20,30);
sum(2000,30);
sum(2);

function square(value){
 return value*value;
}
const squaredValue = square(22);
console.log(squaredValue);