const username = document.getElementById("username");

username.addEventListener("invalid",()=>{
username.setCustomValidity("Dont forget to enter your username!");

});
username.addEventListener("input",()=>{
username.setCustomValidity("");

});