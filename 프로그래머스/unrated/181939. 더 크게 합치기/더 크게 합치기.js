function solution(a, b) {
    var answer = 0;
    let front = a.toString() +b.toString();    
    let back = b.toString() +a.toString();
    
    return Number(front) >= Number(back)? Number(front) : Number(back);
    
}