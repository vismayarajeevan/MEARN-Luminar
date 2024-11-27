var car={
    name:"boleno",
    model:"hatch-back",
    manufacturer:"Maruti Suzuki",
    price:"13 lakh"
}

// display car name and its manufacturer

console.log(`car name:${car["name"]}
manufacturer:${car.manufacturer}`);


// check "model key is present?if yes display its value"

console.log(car.hasOwnProperty("model") && car.model);




//add "varient " as automatic and  manual

car.varient=["automatic","manual"]
console.log(car);

// insert varient as hybrid

car.varient.push("hybrid")
console.log(car);


// add color as red, white, blue, ash, black

car.colors=["red","white","blue","ash","black"]
console.log(car);


