const fs = require("fs");
let input = process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().split("\n");

const C = parseInt(input.shift());
const queue = [];
let front = 0; 
let back = 0; 
let result = "";

for (let i = 0; i < C; i++) {
    const [command, arg] = input[i].split(" ");

    switch (command) {
        case "push":
            queue[back++] = parseInt(arg, 10); 
            break;
        case "pop":
            if (front < back) { 
                result += `${queue[front++]}\n`;
            } else {
                result += "-1\n";
            }
            break;
        case "size":
            result += `${back - front}\n`;
            break;
        case "empty":
            result += `${front === back ? 1 : 0}\n`; 
            break;
        case "front":
            result += `${front < back ? queue[front] : -1}\n`;
            break;
        case "back":
            result += `${front < back ? queue[back - 1] : -1}\n`;
            break;
    }
}

console.log(result.trim());
