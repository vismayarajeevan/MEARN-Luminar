products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'},
]

// 1. print product name only
console.log("**************product names***************");


products.forEach(item=>{
    console.log(item.pName);
})

// 2. print all mobile details whose display is lcd

console.log("****************lcd display mobile phones************");


const mobile=products.filter(item=>item.display=='lcd')
mobile.forEach(item=>console.log(item.pName));



// 3. print 5g mobile phone Names

console.log("***************5g mobiles*********************");


products.filter(item=>item.band=='5g').forEach(item=>console.log(item.pName))

// 4. sort mobile based on price

console.log("***********************sorting************************");

products.sort((a,b)=>a.price-b.price)
//sorting make changes in existing array. so we can give products.sort
products.forEach(item=>console.log(item.pName));

// 5. print costly mobile
console.log("***************costly phone***********************");


const highestprice=products.reduce((item1,item2)=>item1.price>item2.price?item1:item2)
console.log(highestprice.pName);


// 6. print low cost mobile

console.log("*********************low cost mobile*******************");

// const lowCost=products.reduce((item1,item2)=>item1.price<item2.price?item1:item2)
// console.log(lowCost.pName);
// or

console.log(`cheapest mobile: ${products.reduce((item1,item2)=>item1.price<item2.price?item1:item2).pName}`);









