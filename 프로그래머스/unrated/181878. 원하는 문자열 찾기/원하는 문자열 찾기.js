function solution(myString, pat) {
    var answer = myString.toUpperCase();
    let patAnswer = pat.toUpperCase();
    return answer.includes(patAnswer)? 1 : 0;
}