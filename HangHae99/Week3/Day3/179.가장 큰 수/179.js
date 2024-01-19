/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function(nums) {
    const numsSort = nums.sort((a, b) => ("" + b + a) - ("" + a + b));
    result = "";

    if (numsSort[0] === 0) {
        return "0";
    }
    
    for (let i = 0; i < numsSort.length; i++){
        result += numsSort[i] 
    }

    return result;
};