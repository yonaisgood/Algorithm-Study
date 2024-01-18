const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let [n, k] = input.shift().split(" ").map(Number);
let arr = input.map(Number);
let answer = 0;

for(let i = n-1; i >= 0; i--){
    answer += Math.floor(k / arr[i])
    k = k % arr[i]
}

console.log(answer)