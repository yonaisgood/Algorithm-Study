const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift();

const tests = []

while (input.length > 0){
    const numCount = Number(input.shift());
    const phoneNumbers = input.splice(0, numCount).sort();

    let result = "YES"
    for (let i = 0; i < phoneNumbers.length; i++){
        const preNum = phoneNumbers[i-1];
        const curNum = phoneNumbers[i];
        if (curNum.startsWith(String(preNum))) {
            result = "NO"
            break;
        }
    }    
    tests.push(result)
}
console.log(tests.join("\n"))