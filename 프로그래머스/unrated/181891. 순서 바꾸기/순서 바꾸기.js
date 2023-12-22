function solution(num_list, n) {
    
    let first = num_list.slice(n);
    let seconde = num_list.slice(0,n);
    let answer = [...first,...seconde];
    
    return answer  ;
}