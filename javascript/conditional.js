//Conditional Statement
/*
If(condition){
console.log("printhis")
}else {
    console/log("otherwise printhis")
    }
*/
// const age = 17;
// if(age>=18){
//     console.log("You are an adult")
// }else{
//     console.log("You are a minor")
// }

let marks = -1;
if (marks >= 90 && marks <= 100) {
  console.log("Distinction");
} else if (marks < 90 && marks >= 80) {
  console.log("First Divsion");
} else if (marks < 80 && marks >= 60) {
  console.log("Second Division");
} else if (marks < 60 && marks >= 40) {
  console.log("passed");
} else if (marks < 40 && marks >= 0) {
  console.log("You are failed");
} else {
  console.log("Input correct marks");
}

//Nested If else statement
let age = 18;
if (age >= 16) {
  console.log("you can have your citizenship");
  if (age >= 18) {
    console.log("You can also make voter id");
  }
} else {
  console.log("grow up");
}

//Ternary Operators
const division = 3;
division >= 4 ? console.log("Excellent") : console.log("All right");

//swtich-case
const gender = "Others";
switch (gender) {
  case "Male":
    console.log("Male");
    break;
  case "Female":
    console.log("FeMale");
    break;

  case "Others":
    console.log("Others");
    break;
}
