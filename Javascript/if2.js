//Q) write a program to check whether a number is positive or negative?

num=-9
if(num>0){
    console.log(`number is positive`);
}else if(num<0){
    console.log(`number is negative`);
}else{
    console.log(`number is zero`);
}

console.log(num>0?"number is positive":num<0?"number is negative":"number is zero");
