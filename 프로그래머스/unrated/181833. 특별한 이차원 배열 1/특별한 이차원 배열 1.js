function solution(n) {
    let answer = [];
    for (let i = 0; i < n; i++){
        answer.push(Array(n).fill(0))
    }
    
   for (let i = 0; i <answer.length; i++){
       let count = answer[i]
       
       answer[i][i] = 1
   }
    return answer;
}