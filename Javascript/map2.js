var numArray=[10,20,30,40,2,3,5,89,90]

//print a new array with vaues satisfying the given condition, if existing array value>50 then decrement its value by 1 else increment its value by 1


console.log (numArray.map((num)=>num>50?num=num-1:num=num+1));