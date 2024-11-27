//Q) write a program to print the second largest number among 3 unique numbers and print them in ascending order

let num1=20, num2=5, num3=10

//initially assume num1 is largest and compare with other numbers

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`second largest is ${num2}`)
        console.log(`ascending order is ${num3}, ${num2},${num1}`);
    }else{
        console.log(`second largest is ${num3}`)
        console.log(`ascending order is ${num2}, ${num3},${num1}`);
    }
}

//assume num2 is largest and compare with other numbers


else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`second largest is ${num1}`)
        console.log(`ascending order is ${num3}, ${num1},${num2}`);
    }else{
        console.log(`second largest is ${num3}`)
        console.log(`ascending order is ${num1}, ${num3},${num2}`);
    }
}

//assume 3rd number is largest 
else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`second largest is ${num1}`)
        console.log(`ascending order is ${num2}, ${num1},${num3}`);
    }else{
        console.log(`second largest is ${num2}`)
        console.log(`ascending order is ${num1}, ${num2},${num3}`);
    }
}
