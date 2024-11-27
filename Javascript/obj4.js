pattern="ABBCCBAD"
//find the first recursive character from the given pattern
//output:B


//logic:-

//first convert word to split to get each value

// create an empty object

// get each value from array and check that is present in the output object or not

// if the value is present break
// if it is not present push that to object


output={}
charArray=pattern.split("")

for(let word of charArray){
    if(word in output){
        console.log(`${word} is the first repeating character in the arrray`);
        break;
        
    }else{
        output[word]=1   
    }

}



