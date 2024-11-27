//Q) Write a program to find GCD/ HCF of 2 numbers

const prompt= require('prompt-sync') ({sigint:true})

const input1= prompt("enter first number:" );
const input2= prompt("enter second number:");

var num1= Number(input1)
var num2= Number(input2)

var gcd=1;   // to store result declare a variable

if(num1<num2){
    for (let num=1;num<=num1;num++){
        if(num1%num==0 && num2%num==0){
            gcd=num;

        }
    }
    console.log(gcd);
    
}
else{
    for(var num=1;num<=num2;num++){
        if(num1%num==0 && num2%num==0){
            gcd=num;
        }
    }
    console.log(gcd);
    
}

    
