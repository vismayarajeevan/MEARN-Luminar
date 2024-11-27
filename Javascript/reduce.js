var numArray=[10,20,30,40,2,3,5,89,90]

// find least number
//find highest number
//find total sum of all numbers


//1)least

console.log("least value:");

console.log(numArray.reduce((a,b)=>a<b?a:b));
console.log("highest value:");
console.log(numArray.reduce((a,b)=>a>b?a:b));

console.log("sum: ");
console.log(numArray.reduce((a,b)=>a+b));





