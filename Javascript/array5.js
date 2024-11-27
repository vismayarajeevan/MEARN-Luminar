//print pairs whose sum is 6 
//pairArray=[2,3,4,5]


pairArray=[2,3,4,5]
 n=pairArray.length
 
 for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(pairArray[i]+pairArray[j]==6){

            console.log(pairArray[i],pairArray[j]);
            
        }
    }
 }