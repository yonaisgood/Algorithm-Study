function solution(my_string, m, c) {
    var answer = "";
    let finalAnswer = "";
    
    for(let i = 0; i < my_string.length; i+=m){
        answer += my_string.slice(i,i+m);
    }
    
    for(let j = c-1; j <my_string.length; j+=m){
            finalAnswer += (my_string[j])
        }
 
    
    return  finalAnswer ;
}