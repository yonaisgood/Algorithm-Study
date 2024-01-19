// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync('BJ-Pre-Coding/Week3/10814.나이순정렬/input.txt').toString().trim().split("\n");

const lengthDelete = input.shift();
input.sort((a,b)=> a.split(" ")[0] - b.split(" ")[0]);

console.log(input.join("\n"))