// Q) write a program to find reverse of a number

const prompt= require ('prompt-sync') ({signit:true})

var input =prompt('Enter the number:')

//convert string to number

var num=Number(input);

var reverse="";
while(num>0){
    let lastDigit=num%10;   // 3,  12%10=2 ----1%10
    reverse = reverse += lastDigit;  // 3+""  ---2+"3" ="32"
    num=Math.floor(num/10);  // 123/10=12. num=12 --12/10=1
}
console.log(`reverse of ${input}= ${reverse}`);
