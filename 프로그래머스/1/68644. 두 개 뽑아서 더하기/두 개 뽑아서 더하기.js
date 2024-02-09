function solution(numbers) {
    var answer = [];
    
    for (let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(i != j){
                answer.push(numbers[i]+numbers[j])
            }
        }
    }
    const set = new Set(answer);
    let finalAnswer = [...set]
    return finalAnswer.sort((a,b)=>a-b);
}