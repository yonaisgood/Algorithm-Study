function solution(num_str) {
    var answer = 0;
    let num_slice = num_str.split("")
    for(let i = 0; i < num_slice.length; i++){
        answer += Number(num_slice[i])
    }
    return answer;
}