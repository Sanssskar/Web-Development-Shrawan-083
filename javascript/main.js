// console.log("Hello world");
// console.error("Undefined variable")
// console.warn("You have been hacked")
// console.info("you are fired")
// Variables -> var , let , const 
// case-sensitive 
// resrved words , $,_ aru kunei special character words na chalaunu

 var age=20;
 var age=24;
console.log(age);

let Age=40;
 Age=222;
console.log(Age);

const name="Tiger"
 
console.log(name)

// Data Types 
/*
1. Integer ->number 1,2,3,4,5 double -> 22.25 
2. String-> "Ram","Hari","10"
3. Boolean -> true,false
4 Null-> null
5. Undefined -> undefined
6. Object {key:value}
7. Array = [1,2,3,4,"Hari","shyam",true,false,null] list of values
 */

const Object = {
    name: "Ram",
    age: 25,
    isSingle : false,
    haveKids : null,
}
console.log(Object);

const school = ["Student",12,true,null,undefined]
console.group(school.length)

/*
Operators
1. Arithmetic Operators : + , - , / , * , %
2. Relational Operators : > , < , >= , <= , == , === , !=
3. Logical Operators : && (AND) , || (OR) , ! (NOT)
4. Ternary operators : condtion ? true : false
*/

console.log("============ Arithmetic Operators ============")
console.log(20+30);//50
console.log(20-30);//-10
console.log(20/5);//4
console.log(20*30);//600
console.log(10%3);//1

console.log("============ Relational Operators ============")
console.log(10>20);//false
console.log(2<5);//true
console.log(10>=10);//true
console.log(11<=10);//true
console.log("5"==5);
console.log("5" === 5);
console.log(10!=5);

console.log("============ Logical Operators ============")
console.log(10>=10 && 4<5);//duitei condition true vayo vaney matra true hunxa
console.log(10>=10 || 4<5);// euta condition true vayeni true hunxa
console.log(!false);

