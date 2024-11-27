const boleno={
    name:"boleno",
    manufacture:"maruti",
    model:"hatch-back",
    price:"12lakh"

}


const glanza={
    name:"glanza",
    manufacture:"toyota",
    price:"14lakh"

}

glanza.__proto__=boleno

console.log(`The car is ${glanza.name} and model is ${glanza.model}`);
