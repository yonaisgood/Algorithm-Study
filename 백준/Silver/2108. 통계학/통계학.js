const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let answer = "";
const firstNumDelete = input.shift();
const numbers = input.map(Number).sort((a,b)=>a-b);

//1.산술평균
answer += `${Math.round((numbers.reduce((acc,curr) => acc + curr, 0)) / firstNumDelete)}\n`

//2.중앙값
answer += `${numbers.sort((a,b)=>a-b).slice(numbers.length/2, numbers.length/2 + 1)}\n`

//3.최빈값
const mostFreq = {};
let maxCount = 0;
let mode;

for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];

    if (mostFreq[current] === undefined) {
        mostFreq[current] = 1;
    } else {
        mostFreq[current] += 1;
    }

    if (mostFreq[current] > maxCount) {
        maxCount = mostFreq[current];
        mode = [current];
    }else if (mostFreq[current] === maxCount){
        mode.push(current)
    }
}

if (mode.length > 1) {
    mode.sort((a, b) => a - b);
    const secondMode = mode[1];
    answer += `${secondMode}\n`;
} else {
    answer += `${mode.join(" ")}\n`;
}

//4. 범위
answer += `${numbers[numbers.length-1] - numbers[0]}\n`

console.log(answer)