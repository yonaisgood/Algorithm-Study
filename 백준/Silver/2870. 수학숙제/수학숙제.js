// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
let numbers = [];

for (let i = 1; i <= N; i++) {

    let line = input[i];
    let temp = ""; 

    for (let char of line) {
        if (!isNaN(char)) {
            temp += char;
        } else if(isNaN(char)){         
            if (temp !== "") {
                numbers.push(BigInt(temp)); 
                temp = ""; 
            }
        }
    }
    if (temp !== "") {
        numbers.push(BigInt(temp));
    }
}

numbers.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
console.log(numbers.join("\n").trim())
