//Q) write a program to find largest among two numbers.

var num1=20
var num2=90
if(num1>num2){
    console.log(`num1 is greater `);
}else if(num2>num1){
    console.log(`num2 is greater`)
}else{
    console.log(`two numbers are equal`)
}


//using ternary operator

console.log(num1>num2?"num1 is greater":num2>num1?"num2 is greater":"numbers are equal");
