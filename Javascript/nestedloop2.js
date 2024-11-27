// print a pattern

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

for (var row=1;row<=4;row++){
    var rowContent="";
    for(var col=1;col<=4;col++){
        rowContent+=row+" "
    }
    console.log(rowContent);
    
}