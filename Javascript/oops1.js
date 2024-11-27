class Employee{
    //properties
    //functions

    constructor(id,name,salary,desig){
        this.empId=id
        this.empName=name
        this.empSal=salary
        this.empDesig=desig

    }

    displayEmployee(){
        console.log(`--------------------------EMPLOYEE DETAILS-----------------------
                 Id: ${this.empId}
                 Name: ${this.empName}
                 salary: ${this.empSal}
                 designation: ${this.empDesig}`);
        
    }
}

//object

//obj1
const emp1=new Employee(100,"Max",30000,"developer")
emp1.displayEmployee()

//obj2

const emp2=new Employee(101,"Mini",25000,"tester")
emp2.displayEmployee()


