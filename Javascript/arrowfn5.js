// write  a arrow function to find factorial of a number

var factorial=(n)=>{
     if(n==1){               
         return 1
     }
    return n*factorial(n-1)
}

console.log(factorial(5));
