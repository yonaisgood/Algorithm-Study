const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const numberOfCases = parseInt(input[0]); 

function findMostFrequentChar(sentence) {
    const frequency = {};

   for (const char of sentence) {
        if (char !== ' ') {
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    let maxFreq = 0;
    let mostFrequentChars = [];
    for (const [char, freq] of Object.entries(frequency)) {
        if (freq > maxFreq) {
            maxFreq = freq;
            mostFrequentChars = [char];
        } else if (freq === maxFreq) {
            mostFrequentChars.push(char);
        }
    }

    if (mostFrequentChars.length > 1) {
        return '?';
    } else {
        return mostFrequentChars[0];
    }
}

for (let i = 1; i <= numberOfCases; i++) {
    console.log(findMostFrequentChar(input[i]));
}