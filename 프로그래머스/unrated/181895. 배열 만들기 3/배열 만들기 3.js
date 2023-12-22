function solution(arr, intervals) {
    let answer = [];
    
    for(let i = 0; i < intervals.length; i++){
        let [a,b] = intervals[i];
        answer.push(...arr.slice(a, b+1))
    }
    
    
    return answer ;
}