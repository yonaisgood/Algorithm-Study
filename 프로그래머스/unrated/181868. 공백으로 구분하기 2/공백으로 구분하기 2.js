function solution(my_string) {
    let answer = [];
    let stringSplit = my_string.split(" ");
    for(let i = 0; i < stringSplit.length; i++){
        if(stringSplit[i] != ""){
            answer.push(stringSplit[i])
        }
    }
    return answer;
}