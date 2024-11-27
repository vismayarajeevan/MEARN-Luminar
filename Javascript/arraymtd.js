const numArray=[
    [10,20],[18,19],[30,40],[50,60],[70,80],[90,100]
]



//1) write a program to print all numbers>50

//convert 2 dimensional array to 1 dimensional array
const num1=numArray.flat()
console.log(num1.filter(num=>num>50))

//2) write a program to print an array of squares of all numbers in the existing array
const num2=num1.map(num=>num**2)
console.log(num2);

//3)print total sum of all numbers

console.log(num1.reduce((a,b)=>a+b))

//4)print highest number

console.log(num1.reduce((a,b)=>a>b?a:b));









