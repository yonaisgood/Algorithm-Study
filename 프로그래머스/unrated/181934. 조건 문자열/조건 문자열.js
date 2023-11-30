function solution(ineq, eq, n, m) {
   answer=0;
    
    if(ineq == "<" && eq == "="){
       return answer = n <= m ? 1 : 0
   }else if(ineq == ">" && eq == "="){
        return answer = n >= m ? 1 : 0
   }else if(ineq == "<" && eq == "!"){
       return answer = n < m ? 1 : 0;
   }else if(ineq == ">" && eq == "!"){
       return answer = n > m ? 1 : 0;
   }
    return answer;
}