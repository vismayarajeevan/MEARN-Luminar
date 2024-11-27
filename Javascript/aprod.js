// [id,name,price,stock]
products = [
    [1,'hide and seek', 50, 20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4, 'parleG', 25,0],
    [5,'tiger', 20,30],
    [6, 'unibic', 60,20],
    [7,'good day',70,20]
]

//1) display all products name
console.log("*******************display all products name*****************");

products.forEach(item=>console.log(item[1]))

//2) display products whose price <Rs.50
console.log("*******************products whose price <Rs.50*****************");

products.filter(item=>item[2]<50).forEach(item=>console.log(item[1]))

//3) Print price of oreo
console.log("*******************price of oreo*****************");
const oreo=products.find(item=>item[1]=="oreo")
console.log(`price of oreo is ${oreo[2]}`);


//4) print costly product name
console.log("*****************costly product name*******************");

console.log(products.reduce((a,b)=>a[2]>b[2]?a:b))


//5) Display out of stack product
console.log("*******************out of stack product*****************");

console.log(products.filter(item=>item[3]==0))

//6) Sort products based on stock in descending order :sort
console.log("*******************Sort products based on stock in descending order*****************");

products.sort((a,b)=>b[3]-a[3]).forEach(item=>console.log(item[1]))

//7) print product having maximum available stock :reduce
console.log("*******************product having maximum available stock*****************");

console.log(products.reduce((a,b)=>a[3]>b[3]?a:b)[1])


//8) is there any product can be purchased by Rs.10:some
console.log("*******************any product can be purchased by Rs.10*****************");

console.log(products.some(item=>item[2]<=10)?"yes":"no")
//9) Is there any product in the range of 10 to 30:some
console.log("*******************any product in the range of 10 to 30*****************");

console.log(products.some(a=>a[2]>10 && a[2]<30)?"yes":"no");

//10) Print all products in the range of 10 to 30:filter
console.log("*******************all products in the range of 10 to 30*****************");

products.filter(item=>item[2]>10 && item[2]<30).forEach(item=>console.log(item[1]))
