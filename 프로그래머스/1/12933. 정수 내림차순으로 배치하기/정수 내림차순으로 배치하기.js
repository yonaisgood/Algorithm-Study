function solution(n) {
    let stringN = n.toString();
    let answer = [...stringN].sort((a,b)=>b-a).join("")
    return +answer
}