function solution(my_string, queries) {
    var answer = [...my_string];
    
    let flipSentence = ""; 
    
    for (let i = 0; i < queries.length; i++){ 
        let [s, e] = queries[i];
        let flippedSubarray = answer.slice(s, e + 1).reverse(); 
        answer = answer.slice(0, s).concat(flippedSubarray, answer.slice(e + 1)); 
    }
    
    flipSentence = answer.join(''); 
    
    return flipSentence;
}