function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

function solution(s) {
    if (s.length <= 1) {
        return s.length;
    }

    let maxLength = 1;

    for (let i = 0; i < s.length; i++) {
        
        let len1 = expandAroundCenter(s, i, i);
        
        let len2 = expandAroundCenter(s, i, i + 1);

        
        let len = Math.max(len1, len2);

        
        maxLength = Math.max(maxLength, len);
    }

    return maxLength;
}