function solution(myString, pat) {
    let answer = 0;
    
    for (let i = 0; i < myString.length; i++){
        let subSring = myString.slice(i,i+pat.length);
        
        if(subSring == pat){
            answer ++    
        }        
    }
    return answer;
}