// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const numbers = input[1].split("");
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
}

console.log(sum)