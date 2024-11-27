// Q) write a program to find the factorial of a number

const prompt= require ('prompt-sync') ({signit:true})

const input =prompt('Enter the number:');   // when we put a data from propt it is in string format

//convert string to number    - Number(value)

var num= Number(input);



var fact=1;
while(num>0){
    fact=fact*num;
    num--;
}
console.log(`${input}!= ${fact}`);
