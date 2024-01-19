// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync('HangHae99/Week3/Day4/13305.주요소/input.txt').toString().trim().split("\n");

const cityCount = input.shift();
const distanceCount = input.shift().split(" ").map(BigInt);
const oilCost = input.shift().split(" ").map(BigInt);

let distanceCost = BigInt(0);
let currentPrice = oilCost[0];

for (let i = 0; i < cityCount -1; i++){
    distanceCost += currentPrice * distanceCount[i]

    if(currentPrice > oilCost[i + 1]){
        currentPrice = oilCost[i + 1]
    }
}


console.log(String(distanceCost))