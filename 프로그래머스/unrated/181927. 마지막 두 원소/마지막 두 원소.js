function solution(num_list) {
    var answer = num_list;
    let lastNumber = num_list[num_list.length-1];
    let lastBeforeNumber = num_list[num_list.length-2];
    
    if(lastNumber>lastBeforeNumber){
        answer.push(lastNumber-lastBeforeNumber)
    }else{
        answer.push(lastNumber*2)
    }
    return answer;
}