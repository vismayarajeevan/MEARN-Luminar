//2.display highest expense

var expense=[23000, 34000, 12000,56000,43000,27000,68000]
var n=expense.length;
var max=expense[0];
for(let i=0;i<n;i++){
    if(max<expense[i]){
        max=expense[i]
    }        

}
console.log(max);
