/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 한 글자일 경우, s를 뒤집었을 때 s와 같은 경우 s 그대로 반환
    if (s.length === 1 || s === s.split('').reverse().join('')) {
        return s;
    }

    /**
     * 확장 함수
     * @param {number} left
     * @param {number} right
     * @return {string}
     */
    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left -= 1;
            right += 1;
        }
        return s.substring(left + 1, right);
    };

    // 문자열 길이가 가장 큰 값을 result에 담아서 반환
    let result = '';
    for (let i = 0; i < s.length - 1; i++) {
        // for문 돌리면서 현재 가장 문자열이 긴 단어 result에 담아서 함께 비교
        result = [result, 
                  // 짝수인 경우 한 자리씩 비교
                  expand(i, i + 1), 
                  // 홀수인 경우 두 자리씩 비교
                  expand(i, i + 2)
                 ].reduce((prev, str) => str.length > prev.length ? str : prev);
    }
    return result;
};