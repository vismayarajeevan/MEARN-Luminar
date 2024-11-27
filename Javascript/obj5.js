//display number count

numArray=[10,20,30,40,20,30,50,30,20,10,50,30,20,10,60,70,80,20]


output={}
numArray.forEach(val=>output.hasOwnProperty(val)?output[val]+=1:output[val]=1)
console.log(output);
