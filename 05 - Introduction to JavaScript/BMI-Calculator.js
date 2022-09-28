// BMI Calculator

const prompt = require('prompt-sync')();

function calc(w, h) {
    return w / h ** 2;
}

let weight = prompt("Your weight: ");
let height = prompt("Your height: ");

console.log("Your BMI: " + Math.round(calc(weight, height)))