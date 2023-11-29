function solution(str1, str2) {
    
    let answer = [];
    let odd = str1.split("");
    let even = str2.split("");
    
    
     for(i = 0; i < str1.length; i++){
        answer += str1[i]+str2[i]  
    }
       
    return answer;
}