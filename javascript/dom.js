const title = document.getElementById("title");

// console.log(title);

const button = document.querySelector("button");

button.addEventListener("click",function(){
title.innerText = "Hello world";
title.style.color = "green"; 
title.style.background = "#FF6900";
title.style.border = "5px solid black";
title.style.padding = "20px"
})