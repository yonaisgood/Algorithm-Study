// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync('HangHae99/Week3/Day4/11047.동전0/input.txt').toString().trim().split("\n");

let [n, k] = input.shift().split(" ").map(Number);
let arr = input.map(Number);
let answer = 0;

for(let i = n-1; i >= 0; i--){
    answer += Math.floor(k / arr[i])
    k = k % arr[i]
}

console.log(answer)