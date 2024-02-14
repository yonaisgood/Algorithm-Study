// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const word = input.join().toUpperCase()
let wordCount = {}

for(let i = 0; i < word.length; i++){
    const currentChar = word[i];
    if(wordCount[currentChar] === undefined ){
        wordCount[currentChar] = 1;
    }else{
        wordCount[currentChar] += 1;
    }
}

let maxCount = 0;
let FreqChar = "?"
let isMultiple = false;

for(let char in wordCount){
    if(wordCount[char] > maxCount){
        maxCount = wordCount[char]
        FreqChar = char;
        isMultiple= false;
    }else if(wordCount[char] === maxCount){
        isMultiple = true;
    }
}

console.log(isMultiple? "?" : FreqChar)