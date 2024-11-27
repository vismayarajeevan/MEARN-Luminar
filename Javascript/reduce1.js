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

//find employee with least salary
// find employee with highest salary
// find all employee toatal salry


//2)highest salary

const highestEmp=employee.reduce((a,b)=>a[4]>b[4]?a:b)
console.log(`highest salaried employee is ${highestEmp[1]} and salary is ${highestEmp[4]}`);


//least salary employee
// there are 2 least salaried employee
// to print last value
const lowestEmp=employee.reduce((a,b)=>a[4]<b[4]?a:b)
console.log(`First lowest salaried employee is ${lowestEmp[1]} and salary is ${lowestEmp[4]}`);

//to print first value

const lowest1Emp=employee.reduceRight((a,b)=>a[4]<b[4]?a:b)
console.log(`Last lowest salaried employee is ${lowest1Emp[1]} and salary is ${lowest1Emp[4]}`);


//sum 



// create an array with  salary

const sum=employee.map((salary)=>(salary[4]))
console.log(sum);

console.log(`Total salary is: ${sum.reduce((a,b)=>a+b)}`);




