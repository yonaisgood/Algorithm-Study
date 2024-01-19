// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync('BJ-Pre-Coding/2751/input.txt').toString().trim().split("\n").map(item => Number(item));

const inputArr = new Set(input);
const uniqueArr = Array.from(inputArr).sort((a,b)=>a-b);

console.log((uniqueArr).join("\n"))
