//find the output
//var expenses=[23000, 34000, 12000,56000,43000,27000,68000]
// 1.display least expense
// 2.display highest expense
//3.display total expense

var expense=[23000, 34000, 12000,56000,43000,27000,68000]
var n=expense.length;
var min=expense[0];
for(let i in expense){
    if(min>expense[i]){
        min=expense[i];
        
    }
}
console.log(min);




