function solution(t, p) {
    const NumberP = parseInt(p)
    let count = 0;
    
    for(let i = 0; i <= t.length - p.length; i++){        
        const substringT = t.substring(i, i + p.length);
        const NumberT = parseInt(substringT)
        
        if (NumberT <= NumberP) {
        count++;
        }
    }  
    
    return count;
}