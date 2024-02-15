// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = input.join().split(" ");

const num1 = +num[0];
const num2 = +num[1];

// 최대공약수(GCD)
function getGCD(num1, num2) {
    while(num2 > 0){
        let temp = num1;
        num1 = num2;
        num2 = temp % num2;
    }
    return num1; 
}

// 최소공배수(LCM)
function getLCM(num1, num2) {
    return (num1 * num2) / getGCD(num1, num2); 
}

console.log(getGCD(num1, num2)); 
console.log(getLCM(num1, num2)); 