function solution(binomial) {
    var answer = 0;
    let [a,op,b] = binomial.split(" ");
    
    let operator = {
        "+": (a,b) => a+b,
        "-": (a,b) => a-b,
        "*": (a,b) => a*b
    }    
    return operator[op](Number(a),Number(b))
}