// check element 2 is in array or not
// numArray=[10,11,2,23,45,28,58]


let numArray=[10,11,2,23,45,28,58]
var low=0
var last=numArray.length-1
var search=2
var found=false
var count=0
numArray.sort((a,b)=>a-b)

while(low<=last){

    count++
    var mid=Math.floor((low+last)/2)
    if(numArray[mid]==search){
        found=true
        break
    }else if(numArray[mid]<search){
        low=mid+1
    }else if(numArray[mid]>search){
        last=mid-1
    }

}
console.log("execution time",count);

console.log(found?"number is found":"number not found");






