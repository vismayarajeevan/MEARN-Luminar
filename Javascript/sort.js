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




//sort dara with 1st dose vaccine in ascending
covid_data.sort((a,b)=>a[5]-b[5]).forEach(district=>console.log(district[1]))



// 4) sort data with +ve case in descending order

console.log("********sort data with +ve cases in descending order with its district name only****");


 covid_data.sort((a,b)=>b[2]-a[2]).forEach(a=>console.log(a[1]))  // to print district name use foreach