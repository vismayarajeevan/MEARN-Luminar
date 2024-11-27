// Q) print pattern

// *
// * *
// * * *
// * * * *


for(var row=1;row<=4;row++){   // 1 , 1<=4  //2 , 2<=4   // 3 3<=4 
    var rowContent="" 

    for(var col=1;col<=row;col++){   //1 , 1<=1 t  , 2 2<=1  f  // 1 , 1<=2 t   2, 2<=2 t    3, 3<=2 f   // 1 , 1<=3 ......
           rowContent+=" *"          // " * " // " *  * "
    }
    console.log(rowContent);
    
    
}