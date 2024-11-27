// write a function to check the eligibility of voting

function eligible(n){
    if(n>18){
        console.log("Eligible for votiong");
        return true;
        
    }else{
        console.log("not ligible for voting");
        return false;
        
    }
    
}

const person= eligible(20);
const person1=eligible(7);
console.log(person);
console.log(person1);


// or

function votingEligibility(age){
    return age>18 ? "eligible for voting":"not eligible for voting"
}
console.log(votingEligibility(24));

