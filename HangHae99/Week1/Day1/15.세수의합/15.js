/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];

    // 배열을 정렬
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // 중복된 값은 건너뜀
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                // 중복된 값 건너뜀
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                // 중복된 값 건너뜀
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};
