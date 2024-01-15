function solution(numbers) {
    let findNum = [0,1,2,3,4,5,6,7,8,9]
    let answer = findNum.filter((v)=> !numbers.includes(v));
    return answer.reduce((acc,curr)=> acc+ curr,0);
}