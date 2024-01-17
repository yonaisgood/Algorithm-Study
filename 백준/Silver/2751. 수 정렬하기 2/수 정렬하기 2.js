const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map(Number);

const uniqueSet = new Set(numbers);
const uniqueArray = Array.from(uniqueSet).sort((a, b) => a - b);

console.log(uniqueArray.join("\n"));