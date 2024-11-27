//print common numbers from the given arrays
//a1=[10,11,12,20,30]
//a2=[11,20,21,30,31]

a1=[10,11,12,20,30]
a2=[11,20,21,30,31]
result=[]
n1=a1.length
n2=a2.length
for(let i=0;i<n1;i++){
    for(let j=0;j<n2;j++){
        if(a1[i]==a2[j]){
            result.push(a1[i]);
        }
    }
}
console.log(result);

//or

// a1=[10,11,12,20,30]
// a2=[11,20,21,30,31]

// for(let a of a1){
// for(let b of a2){
//     if(a==b){
//     console.log(a);
            
//         }

// }}
