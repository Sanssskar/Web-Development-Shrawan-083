/*
- Template literals
- Spread operator , 
- Rest operator
- Object/ Array Destructuring
- Arrow function
*/
//Template literals

const name = "Hari";
const address = "Dharan";

let result = "My name is " + name + " I live in " + address + ".";
console.log(result);

result = `My name is ${name}. 
I live in ${address}.`;
console.log(result);

//Spread Operator
const user = {
  name: "Sita",
  age: 20,
  address: "Inarwa",
};

const profile = {
  phone: 98787987,
  gender: "Female",
  isMarried: true,
};

const userProfile = { ...user, ...profile };
console.log(userProfile);

//Object Destucturing

const userName = user.name;
console.log(userName);
const userAge = user.age;
console.log(userAge);

//Rest Operator
const {
  age,
  address: UserAddress,
  name: UserName,
  ...restOfTheValue
} = userProfile;
console.log(age, UserAddress, UserName, restOfTheValue);

//Array Destructuring
const students = ["Hari", "Ram", "Sachin", "Dinesh", "Yuki", null];
const [student1, student2, student3, student4, student5, student6] = students;
console.log(student6);

//Arrow function
// function sum(a, b) {
//    return a + b;
// }

const sum = (a, b) =>  a + b;
    
console.log(sum(10, 10));
