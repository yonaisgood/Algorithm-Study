function solution(q, r, code) {
    let answer = [...code]
 return answer.filter((_,i)=>(i % q == r)).join("")
}