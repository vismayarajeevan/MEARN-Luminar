// create employee object

const employee={
    empId:1000,
    empName:"Neel",
    empDes:"developer",
    empLoc:"kochi",
    empSal:25000,
    empExp:3
}
console.log(`Type of object is ${typeof employee}`);
console.log(employee);

console.log("************bracket notation********************");

console.log(`Employee name:${employee["empName"]}`);


console.log("************dot notation********************");

console.log(`Employee name:${employee.empName}`);

// check a key is present or not

console.log("*********************in operator********************");
console.log(`Is key empId is present or not? ${"empId" in employee}`);

console.log("*********************hasOwnProperty********************");
console.log(`Is key empId is present or not? ${employee.hasOwnProperty("empId")}`);

// insert element in the object
// insert gender and vaccination status

employee.empGen="Male"
console.log(employee);
Object.assign(employee,{vaccStats:true})
console.log(employee);

//update details

//upadate vaccination ststus to false and increment employee salary to 5000

console.log("*****updste details*************");


employee.vaccStats=false;
employee.empSal +=5000;
console.log(employee);


// to return all keys in an object
console.log("********display all keys*******");

console.log(Object.keys(employee))

console.log("********display all keys*******");
console.log(Object.values(employee));


// to display object as an array
console.log("********convert object to array*********");

console.log(Object.entries(employee));

//to remove a key from object


console.log("**********delete vaccination status from object**************");

delete employee.vaccStats
console.log(employee);

// display each keyvalue pairs one by one

console.log("****display each keyvalue pairs one by one********");
for(let key in employee){
    console.log(`${key}:${employee[key]}`);
    
}

// access each values without using dot and bracket notation

console.log("******destructuring*********");
const {empDes, empName, empId} =employee
console.log(`Designation:${empDes},
    Name:${empName},
    Id:${empId}`);












