const nameArray=["Mini","Mili","Rini","Tini","Rani","Sani"]

// is "rini" is present in the array or not 

console.log(nameArray.some(name=>name=="Rini"))

console.log(nameArray.includes("Rini"));


//2) Display the index of "Rini"
console.log(nameArray.indexOf("Rin"));

//3) remove rini from above array

nameArray.splice(2,1,"rinisha")   // we can remove and add new element
console.log(nameArray);
// to replace the item

// reverse array

console.log(nameArray.reverse());

// concat two array

const newArray=["manu","anu"]
console.log(nameArray.concat(newArray));

//join:- it returns array elements into string by which type is given in the format

console.log(nameArray.join(","));










