// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let maxLength = Math.max(...input.map(v=>v.length));
let answer = "";

for (let i = 0; i < maxLength; i++) {
    for(word of input){
        if(i < word.length){
            answer += word[i];
        }
    }
}
console.log(answer)