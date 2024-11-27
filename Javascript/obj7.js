accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
          ]
    },
    {
          acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossery',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
         ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
         ]
    },
    {
         acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
         ]
    }
]

// 1. total number of accounts-


console.log(`total no.of accounts:${accounts.length}`);


// 2. print account number whose ac_type is savings-

accounts.filter(item=>item.ac_type=="savings").forEach(item=>console.log(`saving account ac.no:${item.acno}`))

// 3. print the balance of account number 1000-


const acc=accounts.find(item=>item.acno==1000)   // here find return a single value.so we cant directly gove foreach. because here we get an object. so assign to a variable
console.log(`balnce of account no 1000: ${acc.balance}`);



// 4. print all gpay transactions-

console.log("---------------------gpay transactions------------------");

console.log(accounts.map(item=>item.transaction).flat(Infinity).filter(acc=>acc.mode=="gpay"));




// 5. print all transactions whose amount  > 5000-
console.log("---------------transaction amount>5000-----------------");


console.log(accounts.map(account=>account.transaction).flat(Infinity).filter(acc=>acc.amount>5000));

// 6. print credit transaction of account 1002 -
console.log("-------------------credit transaction of 1002----------------");


const credit1002=accounts.map(account=>account.transaction).flat(Infinity).filter(item=>item.to==1002)
console.log(credit1002);



// 7. print total credited amount to 1002 -
console.log("---------------------total credited amount to 1002-----------------------");

const totalCredit=credit1002.map(detail=>detail.amount).reduce((a,b)=>a+b)
console.log(`Total credit of 1002: ${totalCredit}`);



// 8. print debit transaction of account 1002 -
console.log("---------------------------debit transaction of 1002-----------------------------");


debit1002=accounts.find(debit=>debit.acno==1002).transaction
console.log(debit1002);


// 9. print total debited amount from 1002 -

console.log("---------------------------total debit transaction of 1002-----------------------------");

const totaldebit=debit1002.map(detail=>detail.amount).reduce((a,b)=>a+b)
console.log(`Total debit amount: ${totaldebit}`)



// 10. print transaction history of 1002 -

console.log("-------------------transaction history of 1002------------------");
const history=[...credit1002,...debit1002]
console.log(history);


// 11. print current balance (balance+credit amount) of 1002


 const currentBal=accounts.find(item=>item.acno==1002).balance+totalCredit;
 console.log(`Current Balance: ${currentBal}`);
 


// 12. print highest balance account details

const highestBal=accounts.reduce((a,b)=>a.balance>b.balance?a:b)
console.log(`highest balance account is ${highestBal.acno} and the balance is ${highestBal.balance}`);




