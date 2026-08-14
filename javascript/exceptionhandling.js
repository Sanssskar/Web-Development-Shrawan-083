// console.log("Start");
// try{
//     console.log("Opening File.....");
// }catch(e){
//     console.log("Could not open file")
// }finally{
//     console.log("Closing file....")
// }
// console.log("End");

// throw->error created intentionally when a condition isnt accepted
let age =15 
try{
    if(age<18){
       throw new Error("You are a minor, be 18+ then join")
    }
    console.log("You can access this page")
}catch(e){
    console.log(e)
}