//3)write a program to print all vowels from the given word

const prompt= require ('prompt-sync') ({signit:true})
const input=prompt("Enter a word:")

var vowel=["a","e","i","o","u"]
console.log(` All vowels: ${input.toLowerCase().split("").filter(char=>vowel.includes(char))}`);


