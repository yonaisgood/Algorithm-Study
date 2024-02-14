// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = [];
let splitArr = input[0].split(/(<[^>]*>)/);

splitArr.forEach((e,i) => {
    let words = "";
    if(e[0] === "<"){
        answer.push(e);
    }else{
        e.split(" ").forEach((e)=> {
            words += e.split("").reverse().join("") + " ";
        });
    }
    answer.push(words.trim())
});

console.log(answer.join(""))