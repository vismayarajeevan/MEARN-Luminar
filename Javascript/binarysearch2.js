//print numbers<10
//nestArray=[[10,20],[2,5],[45,78],[8,9],[3,59]]


var nestArray=[[10,20],[2,5],[45,78],[8,9],[3,59]]  // it is nested array so want nested loop to fetch each element:- to fetch elements use for of loop

for(let subArray of nestArray){
    for(let num of subArray){
        if(num<10){
            console.log(num);
            
        }
    }
}
