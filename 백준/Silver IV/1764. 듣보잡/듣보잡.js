const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(' ').map(Number);

const doNotHear = new Set();
const doNotSee = new Set();

for (let i = 0; i < input.length; i++) {
    if (i < N) {
        doNotHear.add(input[i]);
    } else {
        doNotSee.add(input[i]);
    }
}
let answer = [];
doNotSee.forEach(v => {  
    if (doNotHear.has(v)) answer.push(v);
});
// console.log(doNotHear)

answer.sort()
console.log(answer.length + '\n' + answer.join('\n'));