//Q) write a program to check whether a number is prime or not

// prime number - divisible by 1 and that number only

const prompt= require("prompt-sync") ({signit:true})

const input= prompt("enter a number:")

var num= Number(input);

var isPrime=true;
for(i=2;i<num;i++){
    if(num%i ==0){
        isPrime=false;
        
    }
}
console.log(isPrime ?"prime number":"not a prime number");
