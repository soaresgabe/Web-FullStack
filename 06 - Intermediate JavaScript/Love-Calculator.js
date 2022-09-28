// Love Calculator

const prompt = require('prompt-sync')();

console.log("Love Calculator!");

prompt("First person name: ");
prompt("Second person name: ");

let a = Math.ceil(100 * Math.random());

if(a > 70)
    console.log("Your love score is " + a + "%! \nYou really love each other!");
else if(a > 30)
    console.log("Your love score is " + a + "%");
else
    console.log("Your love score is " + a + "%...");