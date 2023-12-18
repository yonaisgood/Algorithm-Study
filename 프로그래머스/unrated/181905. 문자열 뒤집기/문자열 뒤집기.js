function solution(my_string, s, e) {
    var answer = [];
    let frontWords = my_string.slice(0,s)
    let lastWords = my_string.slice(e+1)
    let mainWords = my_string.slice(s,e+1)
    
    for(let i = 0; i < mainWords.length; i++){
        answer.push(mainWords[i]);
    }
    return frontWords + answer.reverse().join("") + lastWords;
}