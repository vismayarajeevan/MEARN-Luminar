
// [no,district,+ve cases, death rate, cured rate, 1st dose vaccine, 2nd dose vaccine]
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



//print total no.of positive cases

const newArray=covid_data.map(positive=>positive[2])

console.log(newArray.reduce((a,b)=>a+b))


// print total no.of cured cases


const cured=covid_data.map(elements=>elements[4])
console.log(cured.reduce((a,b)=>a+b));

