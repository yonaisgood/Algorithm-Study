/*
Given a string s, return the longest palindromic substring in s. 

* Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

* Example 2:
Input: s = "cbbd"
Output: "bb"

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
*/

//팰린드롬 앞뒤가 똑같은 이효리 같은 글자로 문장, 낱말, 숫자, 문자열 등이다. 

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  // 문자열 s에서 특정 위치를 중심으로 팰린드롬을 확장하는 역할을 함. 
  //left는 왼쪽으로 right를 오른쪽으로 이동시키면서 확장 
  // "예로 "babad" 라면? 첫번째 while문 
  function expandAroundCenter(left, right) {
          while (left >= 0 && right < s.length && s[left] === s[right]) {
              left--;
              right++;
          }
          return right - left - 1;
      }
  
      let maxLength = 0;
  
      for (let i = 0; i < s.length; i++) {
          const len1 = expandAroundCenter(i, i); // 홀수 길이의 팰린드롬
          const len2 = expandAroundCenter(i, i + 1); // 짝수 길이의 팰린드롬
          const currentLength = Math.max(len1, len2);
  
          maxLength = Math.max(maxLength, currentLength);
      }
  
      return maxLength;
  }