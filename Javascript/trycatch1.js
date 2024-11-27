console.log("Exception handling in JS");

const expr="%3+5*10"

try{
    console.log("try block");
    
    const result=eval(expr)
    console.log(result);
    
}catch(err){
    console.log("catch block");
    
    console.log(`error is ${err}`);
    
}
finally{
    console.log("finally block");
    console.log("task completed");
    
    
}