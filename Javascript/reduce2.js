// [no,district,+ve cases, death rate, current rate, 1st dose vaccine, 2nd dose vaccine]
covid_data = [
    [1,'Ernakulam', 34000,2000,23000,20000,2000],
    [2,'Idukki', 14000,3000,25000,30000,1000],
    [3,'Thrissur', 24000,4000,33000,24000,2500],
    [4,'Pathanamthitta', 20000,2000,45000,22000,1500],
    [5,'Kozhikode', 44000,5000,12000,21000,500],
    [6,'Palakkad', 27000,1000,20000,23000,3400],
    [7,'Kottayam', 27000,1500,27000,14000,1000],
    [8,'Kollam', 14000,2500,25000,18000,2700]

]

//1)district having highest +ve case




console.log("1st");

var highest=covid_data.reduce((a,b)=>a[2]>b[2]?a:b);
console.log(`Highest positive case ${highest[1]}`);

//2) district having highest 1st dose vaccine

console.log("*************second***********");

var dose=covid_data.reduce((a,b)=>a[5]>b[5]?a:b);
console.log(`Highest ist dose vaccine district: ${dose[1]}`);

//3) district having lowest death rate


console.log("*************third***********");

var least=covid_data.reduce((a,b)=>a[3]<b[3]?a:b);
console.log(`lowest death rate district is: ${least[1]}`);



// 4) sort data with +ve case in descending order

console.log("sort data with +ve cases in descending order with its district name only");


 covid_data.sort((a,b)=>b[2]-a[2]).forEach(a=>console.log(a[1]))  // to print district name use foreach


 
// print thrissur details

console.log(covid_data.find(num=>num[1]=="Thrissur"))

//print total no.of positive cases

const newArray=covid_data.map(positive=>positive[2])

console.log(newArray.reduce((a,b)=>a+b))
