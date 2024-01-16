function solution(A,B){
    const SortedA = A.sort((a,b)=>a-b);
    const SortedB = B.sort((a,b)=>b-a);
    
    let answer = SortedA.reduce((acc,curr,idx) => acc += SortedA[idx] * SortedB[idx] , 0)
    return answer;
}