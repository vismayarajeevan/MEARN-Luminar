var x=10
var y=20
let temp;
temp=y;
y=x;
console.log(`y=${y}`);
x=temp;
console.log(`x=${x}`);


//
var x=10
var y=20
var x=x+y;
y=x-y;
console.log(`after swap y=${y}`);
x=x-y;
console.log( `after swap x=${x}`);
