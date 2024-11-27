//print pattern

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4


for(var row=1;row<=4;row++){
    var rowContent=""

    
    for(var col=1;col<=row;col++){
        rowContent+=col+ " ";
    }
    console.log(rowContent);
    
}