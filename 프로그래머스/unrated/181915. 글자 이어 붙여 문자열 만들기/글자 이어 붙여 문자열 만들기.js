function solution(my_string, index_list) {
    var answer = [];
    let arrSt = [...my_string]
    
    for(let i = 0; i < index_list.length; i++){
        answer.push(my_string[index_list[i]])
    }
    return answer.join("");
}