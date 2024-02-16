// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let number = +(input.join())

const checkPrimeNum = (n) =>{
    if(n == 1) return false;
    if(n== 2) return true;
    for (let i =2; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0) return false;
    }
    return true;
}

while(true){
    const str = String(number);
    const reverseStr = [...str].reverse().join("");
    if(str === reverseStr && checkPrimeNum(number) == true){
        console.log(number)
        break;
    }
    number++;
}
