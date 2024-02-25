// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim()

const N = +input

let count = 1;
let layer = 1;

if(N == 1){
    console.log(1)
}else{
    while(true){
        count += 6 * layer;
        if(N <= count){
            console.log(layer + 1);
            break;
        }
        layer++
    }
}
