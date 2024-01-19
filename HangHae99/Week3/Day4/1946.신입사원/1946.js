// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync('HangHae99/Week3/Day4/1946.신입사원/input.txt').toString().trim().split("\n");

input.shift()
let testGrade = [];

while (input.length > 0){
    const peopleCount = Number(input.shift());
    const paperReport = input.splice(0, peopleCount).map((v)=>v.split(" ").map(Number)).sort((a,b)=>a[0] - b[0])

    testGrade.push(paperReport) 
}


testGrade.forEach((item)=>{
    let passCount = 1;
    let interviewReport = item[0][1]; //4

    for(let i = 1; i < item.length; i++){
        let nowInterviewReport = item[i][1];
        if(interviewReport > nowInterviewReport){
            passCount += 1;
            interviewReport = nowInterviewReport
        }
    }
 console.log(passCount)
})
