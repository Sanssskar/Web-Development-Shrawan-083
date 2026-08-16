// console.log("Start");
// setTimeout(()=>{
//     console.log("Get student");
// },5000);
// console.log("Show Student");
// console.log("End");

//WHen you finish, call this function
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// })

// function getStudent(sumcallback){
//   setTimeout(()=>{
//     console.log("Student received");
// },5000);
// }
//Promises
// - is an Javascript object
// function getStudent() {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Student received");
//     },2000); //2000ms = 2sec
//   });
// }

//nested
// Callback hell
//doom of pryamid
// getStudent(()=>{
//    getMarks(()=>{
//     getResult(()=>{
//         console.log("result got");
//     })
//    })
// });

// getStudent()
//     .then((data)=>{
//     console.log(data);
// })

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Sanskar");
      console.log("Hey");
    }, 2000);
  });
}
// resolve -> fulfiled
function getMessage(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello", +name);
    }, 2000);
  });
}

function getReply(message){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Nice to meet you");
    }, 2000);
  });
}
// getUser()
//   .then((name) => {
//     console.log(name);
//     return getMessage(name);
//   })
//   .then((message) => {
//     console.log(message);
//   });

async function start() {
  const name = await getUser();
  const message = await getMessage(name);
  const reply = await getReply(message);
  console.log(reply)
}

start();