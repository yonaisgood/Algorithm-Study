function solution(array) {
    let answer = [];
    let nowNum = 0;
    
    for (let i = 0; i < array.length; i++){
        if(array[i] >= nowNum) {
            nowNum = array[i]
            answer=[array[i],i]
        }
    }
    return answer;
}