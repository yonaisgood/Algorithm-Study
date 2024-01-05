function solution(participant, completion) {
    const result = {};
    
    for (const name of participant){
        result[name] = (result[name] || 0) + 1;
    }
    
    for (const name of completion){
        result[name] -= 1
    }
    
    const answer = Object.keys(result).find(name => result[name] == 1)
    return answer
}