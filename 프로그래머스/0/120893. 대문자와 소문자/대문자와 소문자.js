function solution(my_string) {
    
    let answer = ""
    for (let i = 0; i < my_string.length; i++){
        if(my_string[i] == my_string[i].toUpperCase()){
            let changeWord = my_string[i].toLowerCase()
            answer += changeWord
        }else{
            let changeWord2 = my_string[i].toUpperCase()
            answer += changeWord2
        }
    } 
    return answer;
}