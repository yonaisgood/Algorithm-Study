function solution(array) {
    let answer = Math.max(...array)
    return [answer, array.indexOf(answer)];
}