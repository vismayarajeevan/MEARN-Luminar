//1.var

var firstdata
console.log(firstdata, typeof firstdata);

var firstdata='js'
console.log(firstdata, typeof firstdata);



//2.const
// console.log(secondData);
const secondData="const variable"
console.log(secondData);


//let variable
var i=10;
console.log('before loop',i);
for(let i=0;i<=5;i++){
    console.log('inside loop',i);
}
console.log('after loop',i);


//template literals

console.log(`variables are firstData=${firstdata} and second variable is=${secondData}`)