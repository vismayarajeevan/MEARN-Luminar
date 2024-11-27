//2)write a program to check the given word is started with "Q/q"

const prompt= require ('prompt-sync') ({signit:true})
const input=prompt("Enter a word:")
console.log(input.toUpperCase().startsWith("Q")?"word started with q":"not started with q");
