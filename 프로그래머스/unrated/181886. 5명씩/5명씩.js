function solution(names) {
    var answer = [];
    
    
    for(let i = 0; i<names.length; i+=5){
        answer.push(names.slice(i,i+5))
    }
    let answerGroup = answer.map(subArr => subArr[0]);
    return answerGroup;
}