
function solution(numbers) {
  numbers = numbers.sort((a, b) => b - a);
 let answer= Math.max(numbers[0] * numbers[1],numbers[numbers.length-1] * numbers[numbers.length-2]);
    return answer 
}