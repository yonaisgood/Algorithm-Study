function solution(arr) {
    let answer = [];
    
    arr.map((a)=>{
        for(let i = 0; i < a; i++){
            answer.push(a)
        }
    })
    return answer;
}