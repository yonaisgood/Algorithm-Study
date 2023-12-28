function solution(myString, pat) {
    let answer = 0;
    let myArr = [...myString]
    
    answer = myArr.map(v=> (v == "A"? "B" : "A")).join("")
    
    return answer.includes(pat)? 1 : 0;
}