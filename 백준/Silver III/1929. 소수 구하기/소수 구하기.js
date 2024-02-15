const fs = require("fs");
const [M, N] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

// 에라토스테네스의 체
const isPrime = new Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}


for (let i = M; i <= N; i++) {
  if (isPrime[i]) {
    console.log(i);
  }
}