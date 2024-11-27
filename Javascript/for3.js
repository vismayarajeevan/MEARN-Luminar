//Q) write a program to print factorial of a given number using for loop


const prompt =require('prompt-sync') ({signit:true})

const input=prompt("enter a number:")

var num= Number(input)

var fact=1;
for(var i=num;i>0;i--){

    fact=fact*i;
}
console.log(`${num}!= ${fact}`);
