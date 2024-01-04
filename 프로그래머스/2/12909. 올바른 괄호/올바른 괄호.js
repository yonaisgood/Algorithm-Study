function solution(s){
    let answer = 0;
    if (s[0] == ')') return false
    
    for(let i = 0; i < s.length; i++){        
        if(s[i] == '('){
            answer += 1
        }
        else if(s[i] == ')'){
            answer -= 1 
            if(answer < 0) return false
        }
    }    
    return !answer 
}