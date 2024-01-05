function solution(nums) { 
    let answer = 0; 
    let obj = {}; 
    let count_length = nums.length; 
    let type_length = [...new Set(nums)].length; 
    
    if(count_length/2 >= type_length) { 
        return type_length 
    } else { 
        return count_length/2 } }