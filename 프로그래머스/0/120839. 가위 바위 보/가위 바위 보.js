function solution(rsp) {
    var answer = '';
    
    for (let cha of rsp){
        if(cha === "2") answer += 0
        if(cha === "0") answer += 5
        if(cha === "5") answer += 2
    }
    return answer;
}