// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const sentence = input[0];
const strokeCount = {
  'A': 3, 'B': 2, 'C': 1, 'D': 2, 'E': 3, 'F': 3, 'G': 3, 'H': 3, 'I': 1, 'J': 1,
  'K': 3, 'L': 1, 'M': 3, 'N': 3, 'O': 1, 'P': 2, 'Q': 2, 'R': 2, 'S': 1, 'T': 2,
  'U': 1, 'V': 1, 'W': 2, 'X': 2, 'Y': 2, 'Z': 1
};

let convertToStroke = sentence.split("").map(char => strokeCount[char]);
//[ 3, 2, 1, 2, 3 ]

while (convertToStroke.length > 1) {
  let tempArr = [];
  for (let i = 0; i < convertToStroke.length; i += 2) {
    
    if (i + 1 < convertToStroke.length) {
      tempArr.push((convertToStroke[i] + convertToStroke[i + 1]) % 10);
    } else {
      tempArr.push(convertToStroke[i]);
    }
  }
  convertToStroke = tempArr;
}

const answer = convertToStroke % 2 != 0 ?  "I'm a winner!" : "You're the winner?"


console.log(answer);