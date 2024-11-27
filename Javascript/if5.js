//Q) write a program to print 'fizz' if number is divisible by 3, 'buzz' if number is divisible by 5, 'fizzbuzz'if number is divisible by 15.

num=30
if(num%3==0){
    console.log(`fizz`);

}else if(num%5==0){
    console.log(`buzz`);
}else if(num%15==0){
    console.log(`fizzbuzz`);
}else{
    console.log(`try another number`);
}

// using ternary operator

console.log(num%3==0?"fizz":num%5 ==0?"buzz":num%15==0?"fizzbuzz":"try with another number");