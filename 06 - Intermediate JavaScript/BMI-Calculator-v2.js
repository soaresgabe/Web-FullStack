// BMI Calculator

const prompt = require('prompt-sync')();

function calc(w, h) {
    return w / h ** 2;
}

let weight = prompt("Your weight: ");
let height = prompt("Your height: ");
let bmi = Math.round(calc(weight, height));

if(bmi > 25)
    console.log("Your BMI is " + bmi + ", so you are overweight.");
else if(bmi > 18)
    console.log("Your BMI is " + bmi + ", so you have a normal weight.");
else
    console.log("Your BMI is " + bmi + ", so you are underweight.")