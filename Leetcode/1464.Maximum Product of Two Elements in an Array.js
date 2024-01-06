/*
📝 문제 & 설명 : 배열의 두 수 의 곱이 가장 큰 수를 반환하시오

주어진 정수 배열 nums에서 두 가지 다른 인덱스 i와 j를 선택할 것입니다. 
(nums[i]-1)*(nums[j]-1)의 최댓값을 반환하세요.

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]
Output: 12
 

Constraints:

2 <= nums.length <= 500
1 <= nums[i] <= 10^3

🔗 문제 링크 : https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

💆🏻‍♀️ 문제 풀이 :
수의 범위에서 음수가 없으니 크기 순으로 내림차순 정렬해서 가장 앞에 있는 원소와 두번째 원소를 골래 내어 계산하면 되겠구나. 

🛠 코드 :
*/
// 1. sort()로 정렬하여 짠 코드 
var maxProduct = function(nums) {
  let sortNums = nums.sort((a,b)=>b-a)
  let num1 = sortNums[0];
  let num2 = sortNums[1];

  return (num1-1)(num2-1)
};

// 2.불필요하게 길어진 것 같은데 정렬한 배열의 인덱스로 바로 끄집어 내서 쓸까? 하고 수정한 코드 
var maxProduct = function(nums) {
  let sortNums = nums.sort((a,b)=>b-a)

  return (sortNums[0]-1)(sortNums[1]-1)
};


// 3. 파이썬으로 풀어 본 코드 
// 💡 heapq를 사용할 때 최댓값, 최솟값을 골라낼 때 사용할 수 있는 함수 => nlargest() ,  nsmallest
// 💡 파이썬은 최소힙 
/* class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        max_values = heapq.nlargest(2, nums)
        return (max_values[0] - 1) * (max_values[1] - 1)
*/       

