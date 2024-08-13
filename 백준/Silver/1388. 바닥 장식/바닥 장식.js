const file = process.platform === 'linux' ? '/dev/stdin' : './index.txt';
const input = require('fs').readFileSync(file).toString().split('\n');

// 이중 for 문을 사용한 방법
let [N,M] = input[0].split(" ").map(Number);
let area = [];

for (let i = 1; i <= N; i++ ){
    area.push(input[i].split(""))
}

size = N * M;

for(let i = 0; i < N; i++){
    for(let j = 0; j < M; j++){
        let c = area[i][j];
        //"_" 이면서 왼쪽 타일과 같은 케이스
        if(j >= 1 && c === "-" && c === area[i][j-1]) {
            size--
        }
        //"|" 이면서 아래쪽 타일과 같은 케이스
        else if(i < N-1 && c === "|" && c === area[i+1][j])
            size--;
    }

}
console.log(size)