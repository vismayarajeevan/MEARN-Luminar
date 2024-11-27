employee =[
    [1000, 'Neel', 'developer', 'kochi', 25000,3],
    [1001, 'Max', 'tester', 'TVM', 15000,2],
    [1002, 'Maxwell', 'QA', 'kochi', 35000,4],
    [1003, 'Vyom', 'QA', 'kochi', 45000,5],
    [1004, 'Laisha', 'tester', 'TVM', 55000,7],
    [1005, 'Aahan', 'developer', 'TVM', 15000,1],
    [1006, 'Aahil', 'QA', 'kochi', 20000,2],
    [1007, 'Shayan', 'developer', 'kochi', 30000,3],
    [1008, 'Nihaan', 'developer', 'TVM', 25000,3],
]
// 1. Print all Employee Name
console.log("---------------------------------------------------all employee names---------------------------------------------------");

console.log("-----------------employee name using for loop--------------");


for(let num of employee){
    
    console.log(num[1]);
               
}
       

// using forEach

console.log("-----------employee names using foreach------------");

employee.forEach(emp=>{
   console.log(emp[1]);
   
})

// 2. print Total number of employees



console.log(`total emmployees:${employee.length}`);
    
// 3. print developer employee details
console.log("--------------------------------------------------developer employee details---------------------------------------------------------");


console.log("---------------developer employee details using for loop--------------");

for(let i of employee){
    if(i[2]=="developer"){
        console.log(i);
        
    }
}

console.log("---------------------developer emplyee details using filter------------");

const value=employee.filter(emp=>emp[2]=="developer")
console.log(value);

//print name only

console.log("-------------print name only-------------");

employee.filter(emp=>emp[2]=="developer").forEach(emp=>console.log(emp[1]));

// 4. print employee whose salary > 30000

console.log("-----------------------------------------------salary>30000-------------------------------------------------------");

console.log("------------------------using for loop----------------------");


for(let i of employee){
    if(i[4]>30000){
        console.log(i);
        
    }
}

const salary=employee.filter(amount=>amount[4]>30000)
console.log(salary);

//if you want the name only
console.log("-------------print name only----------------");


employee.filter(amount=>amount[4]>30000).forEach(amount=>console.log(amount[1]));

// 5. print details of employee Laisha

console.log("-------------------------------------------details of laisha--------------------------------------------------------");

console.log("-------------------------using for loop-------------------------");


for(let i of employee){
    if(i[1]=="Laisha"){
        console.log(`Employee name:${i[1]}, Employee id:$i[0], Employee designation:${i[2]},Employee location:${i[3]}, Employee salary:${i[4]}, Employee experience:${i[5]}`);
        
    }
}

console.log("----------------------------using find-----------------------------------");

const emp=employee.find(item=>item[1]=="Laisha")
console.log(`
            Employee name:${emp[1]}
            Employee designation:${emp[2]}
            Employee location:${emp[3]}
            Employee salary:${emp[4]}
            Employee expereience:${emp[5]}`);

// 6. Sort employee based on their salary in decending order

console.log("-----------------------------------------------sorting descending-----------------------------------------------------------");

employee.sort((a,b)=>b[4]-a[4]);
console.log(employee);

// 7. sort employee based on their experience in ascending order

console.log("----------------------------------------------sorting ascending------------------------------------------------");
employee.sort((a,b)=>a[5]-b[5]);
console.log(employee);





    