// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync('HangHae99/Week3/Day4/11399.ATM/input.txt').toString().trim().split("\n");

const waitingArr = input[1].split(' ').map(Number).sort((a,b)=>a-b);

let total = 0;
let sum = 0;
for(let i = 0; i < waitingArr.length; i++){
    total += sum + waitingArr[i];
    sum += waitingArr[i];
}
console.log(total);
