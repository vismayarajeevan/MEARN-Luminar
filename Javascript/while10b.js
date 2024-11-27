/*Q) predict the output of given input

 input  -   2                  3                   4             5

   output  -  24                 369                 4936           ?

   logic 1  - 2*12              3*123                4*1234         5*12345

   logic 2  - 2+22              3+33+333           4+44+444+4444    5+55+555+5555+55555

   */

   //logic 2

   const prompt=require('prompt-sync') ({signit:true})

   const input=prompt("enter a number:")

   // convert string into number

   var num= Number(input);
   var i=1;
   var term="";
   var sum=0;
   while(i<=num){
    term=term+num;
    sum+=Number(term);
    
    i++;
   }
   console.log(`output= ${sum}`);
   
   
   