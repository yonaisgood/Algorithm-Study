//약수의 홀,짝수를 위한 함수
function divisor(num){
    const answer = [];
    for(let i = 0; i <= num; i++){
        if(num % i == 0) answer.push(i)
    }
    return answer.length % 2 == 0 ? num : -num
}

// 약수의 총합을 위한 함수
function solution(left, right) {    
    let totalAnswer = 0;
    
    for (let i = left; i < right+1; i++){
        totalAnswer += divisor(i)
    }
    return totalAnswer;
}