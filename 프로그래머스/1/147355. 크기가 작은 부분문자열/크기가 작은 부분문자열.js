function solution(t, p) {
    let count = 0;
    
    for(let i = 0; i <= t.length - p.length; i++){        
        const substringT = t.substring(i, i + p.length);        
        if (+substringT <= +p) count++;        
    }      
    return count;
}