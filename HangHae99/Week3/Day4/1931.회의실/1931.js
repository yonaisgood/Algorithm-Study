// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync('HangHae99/Week3/Day4/1931.회의실/input.txt').toString().trim().split("\n");

const roomCount = Number(input.shift());
const startToEnd = input.map((v)=>v.split(" ").map(Number));

startToEnd.sort((a, b) => a[1] === b[1]? a[0] - b[0] : a[1] - b[1])

let meetingCount = 0;
let currentTime = 0;

for(let i = 0; i < roomCount; i++){
    if(currentTime <= startToEnd[i][0]){
        meetingCount += 1;
        currentTime = startToEnd[i][1];
    }
}

console.log(meetingCount)