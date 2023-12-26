function solution(num_list) {
    let answer = 0;
    if(num_list.length >10){
        for(let i = 0; i < num_list.length; i++){
            answer += num_list[i]
        }
    }
    if(num_list.length < 11){
        answer = 1;
        for(let i = 0; i < num_list.length; i++){
            answer = answer * num_list[i]
        }
    }
    return answer;
}