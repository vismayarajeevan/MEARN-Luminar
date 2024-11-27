// Q) write a program to check whether a number is palindrome or not



const prompt= require ('prompt-sync') ({signit:true})
const input=prompt("Enter a number:")

//convert string into number

var num= Number(input);
var reverse="";
while(num>0){
    let lastDigit= num%10;
    reverse+= lastDigit;
    num = Math.floor(num/10);
}



console.log(input ==reverse ? "palindrome number":"not a palindrome number");
