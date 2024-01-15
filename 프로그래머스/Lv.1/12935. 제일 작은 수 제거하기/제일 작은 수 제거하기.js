function solution(arr) {
    let firstNum = Math.min(...arr)
    let answer = arr.filter((v)=> v != firstNum)
    return answer.length? answer : [-1]
}