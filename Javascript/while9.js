// Q) write aprogram to check whether a 3 digit number is amstrong number or not


const prompt = require('prompt-sync') ({signit:true})

const input= prompt("enter a number:");

// convert string to number

var num=Number(input);

var sum=0;   // to store the sum of numbers

while(num>0){
    let lastDigit =num%10;
    sum += lastDigit**3;
    num=Math.floor(num/10);
}

console.log(`sum of ${input}= ${sum}`);


console.log(input==sum? "amstrong number":"not amstrong number");

