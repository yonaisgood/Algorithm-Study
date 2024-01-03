/*
- 문제
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]


Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// 애너그램 -> 어떤 문자를 재배열하여 다른 뜻을 가지는 다른 단어로 바꾸는 것

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const answerAnagrams = {};

  for (const str of strs){
      const sortStr = str.split("").sort().join();

      if(answerAnagrams[sortStr]){
          answerAnagrams[sortStr].push(str);
      }else{
          answerAnagrams[sortStr] = [str];
      }
  }

  return Object.values(answerAnagrams);
};
