/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let sortNums = nums.sort((a,b)=>b-a)
    let num1 = sortNums[0];
    let num2 = sortNums[1];
    return (num1-1)*(num2-1)    
};