// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const countNum = +input[0]
let count = 0;

for(let i=1; i <= countNum; i++){
    const word = input[i];
    let isGroupWord = true;
    let lastSeen = {};
    
    for(let j = 0; j < word.length; j++){        
        const char = word[j];
        if (lastSeen[char] !== undefined && j - lastSeen[char] > 1) {
            isGroupWord = false;
          }
          lastSeen[char] = j;
        }
        
        if(isGroupWord){
            count += 1
        }
      };
      
console.log(count)