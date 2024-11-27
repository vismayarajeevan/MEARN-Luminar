const weekdays=["sunday","monday","tuesday"]
console.log(weekdays);
console.log("type of weekdays",typeof weekdays);


//to find no.of elements in an array

console.log("Elements in array:",weekdays.length);

// access array elements

console.log("first element in the array:",weekdays[0]);
console.log("last element in the array:",weekdays[weekdays.length-1]);

// to add elements in last of an array
weekdays.push("wednesday")
console.log(weekdays);

// to add element in first of an array
weekdays.unshift("holiday")
console.log(weekdays);

// remove elements from an array

// to remove last element from an array
weekdays.pop()
console.log(weekdays);

// to remove first element from an array

weekdays.shift()
console.log(weekdays);

// display array items one by one

 //1) normal for loop

console.log("************normal for loop************");


for(index=0;index<weekdays.length;index++){
    console.log(weekdays[index]);
    
}

 //2)for-of loop

 console.log("***for-of loop*****");
 
 for(let day of weekdays){
    console.log(day);
    
 }

 //3) for-in loop

 console.log("***********for in lopp*********");

 for(let index in weekdays){
    console.log(weekdays[index]);
    
 }
 




