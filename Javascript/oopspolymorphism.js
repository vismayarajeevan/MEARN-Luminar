function add(...arg){
    console.log(`Result is = ${arg.reduce((a,b)=>a+b)}`);
    
}

add(10,20);
add(20,50,60)
