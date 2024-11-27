//Q) write a program to dispaly numbers whose exponent is in the range of 8 and 36

const prompt = require('prompt-sync') ({signit:true})

const input =prompt("enter the exponent:")

//convert string to number

var exp= Number(input)
const low=8;            // set lower  value
const high=36;         //set higher value
var i=1;       

while(i<=high){
    if(i**exp >=low && i**exp <=high){
        console.log(i);
        

    }
    
    i++;

}
