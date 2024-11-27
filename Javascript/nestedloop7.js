// print pattern - hollow pyramid

//            *
//          *   *
//        *       *
//      * * * * * * *

for(var i=1;i<=4;i++){
    var row=""

    for(var j=1;j<=7;j++){
        if(i==4){                             // or if(i==4 || i+j==5 || j-i==3){ row+="*"} else{ row+=" "}
            row+="*"
        }
        else if(i+j==5){
            row+="*"
        }
        else if(j-i==3){
            row+="*"
        }else{
            row+=" "
        }
    }
    console.log(row);
    
}
