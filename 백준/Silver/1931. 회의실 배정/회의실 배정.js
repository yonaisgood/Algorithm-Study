let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
const meetings = input.map((e) => e.split(" ").map(Number));
meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
let ans = 0;
let now = 0;
for (let i = 0; i < n; i++) {
  if (now <= meetings[i][0]) {
    ans++;
    now = meetings[i][1];
  }
}
console.log(ans);