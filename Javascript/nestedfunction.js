const global="GLOBAL VARIABLE"

const parentFunction= ()=>{
    const parentData="parent variable"
    console.log(`inside parent function, parent variable:${parentData}, globalvariable :${global}`);
    return ()=>{
        const chilData="child variable"
        console.log(`inside child function, parent variable:${parentData}, child variable:${chilData}, global variable:${global}`);
        
    }
    
}
 const functionCall=parentFunction()
functionCall()

// another method to call nested function

parentFunction()()