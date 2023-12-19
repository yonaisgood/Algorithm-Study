function solution(n) {
    let answer = 0;
    let arr = String(n);
    for(let i=0; i<arr.length; i++){
        answer += parseInt(arr[i]);
    }
    return answer;
}