// print dupilcate elements
// dupArray=[10,20,10,20,11,12]

var dupArray=[10,20,10,20,11,12]
let n=dupArray.length

for (let i=0;i<n;i++){           //0  //1   //2 //3
    for (let j=i+1;j<n;j++){    //1 2  //2 3  //3 4 5 6 6<6 f//
        if(dupArray[i]==dupArray[j]){ //10==20 f,10==10 t//20==10 f, 20==20 t// 10==20 f,10==11 f,10==12 f//
            console.log(dupArray[i]);//10 //20//
            break   // exit from j loop
        }
    }
}