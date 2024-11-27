class Bank{

    
    accountDetails = {
        1000: {acno: 1000, username: "userone", password:"userone", balance:50000},
        1001: {acno: 1001, username: "usertwo", password:"usertwo", balance:5000},
        1002: {acno: 1002, username: "userthree", password:"userthree", balance:10000},
        1003: {acno: 1003, username: "userfour", password:"userfour", balance:6000},
    }


// validate account number- function return true/false

validateAcc(acno){
    return    this.accountDetails.hasOwnProperty(acno)
}

// authenticate account (acno, password)

authenticateAcc(acno,password){
   
    if(this.validateAcc(acno)){
        if(password==this.accountDetails[acno].password){
            console.log("Authentication Successfull....");
            
        }else{
            console.log("Invalid password.....Try Again......");
            
        }

    }else{
        console.log("Invalid account number.......");
        
    }
}
// balance enquiry function

balanceEnq(acno){
    if(this.validateAcc(acno)){
        console.log(`Balance of ${acno} is: ${this.accountDetails[acno].balance}`);
        
    }else{

        console.log("Invalid account number.......");
    }
}


// function for fund transfer(fromAcno,toAcno,amount)

transfer(fromAcno,toAcno,amount){
    if(this.validateAcc(fromAcno) && this.validateAcc(toAcno)){
        if(this.accountDetails[fromAcno].balance>=amount){

            console.log(`balance Before transaction from ${fromAcno} to ${toAcno} this is :${this.accountDetails[fromAcno].balance} and ${this.accountDetails[toAcno].balance} `);
            

            this.accountDetails[fromAcno].balance-=amount
            this.accountDetails[toAcno].balance+=amount

            console.log(`balance After transaction from ${fromAcno} to ${toAcno} this is :${this.accountDetails[fromAcno].balance} and ${this.accountDetails[toAcno].balance} `);
            
        }else{
            console.log("Insufficient balance");
            
        }
    }else{
        console.log("Invalid debit or credit account......");
        
    }
}



}

const user= new Bank()
console.log(user.validateAcc(1009)?"Account is valid":"Acoount is not valid");

user.authenticateAcc(1002,"userhree")

user.balanceEnq(1003)

user.transfer(1000,1003,500)




