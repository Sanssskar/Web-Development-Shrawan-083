// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// increment
a = 10;
console.log(++a);
console.log(a);

// decrement
a = 10;
console.log(a--);
console.log(a);

b = 10;
c = 10;
// console.log(c=c+b);
console.log((c -= b));

// 1. for , while , do while , foreach
/*
Syntax:
for(startpoint/initialization ; condition ; increment/decrement){
console.log(print);
}
*/

console.log("============== For loop==============");
for (i = 1; i <= 10; i = i + 1) {
  console.log(i);
}

console.log("============== While loop==============");
i = 11;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("============== Do While loop==============");
j = 11;
do{
    console.log(j);

    j++;
}while(j<=10);

console.log("==============Multiplication Table==============");

// 
a=prompt("Enter a number");
for (i = 1; i <= 10; i = i + 1) {
  console.log(a + "x"+ i +"="+ a*i);
}
// console.log("5"+5);