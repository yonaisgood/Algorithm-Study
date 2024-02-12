const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const firstWord = input[0];
const secondWord = input[1];

function bmt(pattern) {
    const table = Array(pattern.length).fill(0);
    let prefixIndex = 0;
    let suffixIndex = 1;
  
    while (suffixIndex < pattern.length) {
      if (pattern[prefixIndex] === pattern[suffixIndex]) {
        table[suffixIndex] = prefixIndex + 1;
        prefixIndex++;
        suffixIndex++;
      } else if (prefixIndex === 0) {
        table[suffixIndex] = 0;
        suffixIndex++;
      } else {
        prefixIndex = table[prefixIndex - 1];
      }
    }
  
    return table;
  }
  
  function KMP(text, pattern) {
    if (pattern.length === 0) return 0; 
  
    const table = bmt(pattern);
    let textIndex = 0;
    let patternIndex = 0;
  
    while (textIndex < text.length) {
      if (text[textIndex] === pattern[patternIndex]) {
        if (patternIndex === pattern.length - 1) {
          return textIndex - pattern.length + 1; 
        }
        textIndex++;
        patternIndex++;
      } else if (patternIndex > 0) {
        patternIndex = table[patternIndex - 1];
      } else {
        textIndex++;
      }
    }
  
    return -1; 
  }
  
  const index = KMP(firstWord, secondWord);
  const isSubstring = index !== -1 ? "1" : "0";
  
  console.log(isSubstring);
  