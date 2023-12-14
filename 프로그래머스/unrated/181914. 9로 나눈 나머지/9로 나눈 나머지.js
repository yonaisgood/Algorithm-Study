function solution(number) {
    var answer = 0;
    let arr = number.split("");
    for(let i = 0; i < arr.length; i++){
        answer += Number(arr[i])
    }
    
    return answer % 9;
}