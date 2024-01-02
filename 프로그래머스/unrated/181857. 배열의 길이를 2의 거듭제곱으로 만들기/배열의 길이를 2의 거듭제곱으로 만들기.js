function solution(arr) {
    let answer = [...arr];
    let count = 0;
    
    while(true){
        if(answer.length == 2 ** count ){
            break;
        }
        if(answer.length > 2 ** count  ){
            count++
        }else {
            answer.push(0)
        }
    }
    return answer;
}