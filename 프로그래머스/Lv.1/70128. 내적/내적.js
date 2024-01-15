function solution(a, b) {
    let answer = a.reduce((acc,curr,i)=> acc += a[i] * b[i],0)
    return answer;
}