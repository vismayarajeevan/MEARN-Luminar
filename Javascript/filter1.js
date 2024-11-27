
var numArray=[10,20,30,40,2,3,5,89,90]
//Print all odd numbers


for(let num of numArray){
    if(num%2!=0){
        console.log(num);
        
    }
}


// using filter

const newArray=numArray.filter(num=>num%2!=0)
console.log(console.log(newArray));
