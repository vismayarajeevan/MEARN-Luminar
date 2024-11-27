console.log("Exception handling in JS");

const expr="%3+5*10"

try{
    const result=eval(expr)
    console.log(result);
    
}catch(err){
    console.log(` error is ${err}`);
    
}
console.log("js");
