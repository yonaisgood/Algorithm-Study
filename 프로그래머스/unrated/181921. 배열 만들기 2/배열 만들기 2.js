function solution(l, r) {
    var answer = [];    
    
    for(let i = l; i <= r; i++){

    if (String(i).split('').every(digit => digit === '0' || digit === '5')) {
            answer.push(i);
        }
 

    }
    return answer.length > 0 ? answer : [-1];
}