function solution(x1, x2, x3, x4) {

    let first = x1 || x2;
    let second = x3 || x4;
var answer = first && second;
    return answer;
}