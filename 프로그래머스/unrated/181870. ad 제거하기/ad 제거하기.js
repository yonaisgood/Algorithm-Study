function solution(strArr) {
    let answer = []
    
    for(let i = 0; i < strArr.length; i++){
        answer = strArr.filter(v=>!v.includes("ad"))
    }
    
    return answer;
}