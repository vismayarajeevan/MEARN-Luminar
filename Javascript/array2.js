//linear search/sequential search

// check element 2 is in array or not
// numArray=[10,11,2,23,45,28,58]

var numArray=[10,11,2,23,45,28,58]

var num=2
var found=false
for(let number of numArray){
    if(num==number){
        found=true
        break
        
    }
}
console.log(found?"number found":"number not found");
