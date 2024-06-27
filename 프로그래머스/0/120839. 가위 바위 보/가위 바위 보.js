function solution(rsp) {
    var answer = '';
    let splitWord = rsp.split("")
    
    for (let i=0; i < splitWord.length; i++){
        let cha = splitWord[i]
        if(cha === "2") answer += 0
        if(cha === "0") answer += 5
        if(cha === "5") answer += 2
    }
    return answer;
}