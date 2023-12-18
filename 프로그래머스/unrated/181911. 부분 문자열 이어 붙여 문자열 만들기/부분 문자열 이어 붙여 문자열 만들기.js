function solution(my_strings, parts) {
    var answer = [];
    
    for(let i=0; i<parts.length; i++){
        let [s,e] = parts[i]
        answer.push(my_strings[i].slice(s,e+1))
    }
    return answer.join("");
}