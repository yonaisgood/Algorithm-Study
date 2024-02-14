const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


function isAcceptable(password) {
    const vowels = ["a", "e", "i", "o", "u"];
    let hasVowel = false;
    let consecutiveVowelCount = 0;
    let consecutiveConsonantCount = 0;
    let prevChar = '';

    for (let i = 0; i < password.length; i++) {
        const char = password[i].toLowerCase(); 
        const isVowel = vowels.includes(char);

        // 모음 검사
        if (isVowel) {
            hasVowel = true;
            consecutiveVowelCount++;
            consecutiveConsonantCount = 0;
        } else {
            consecutiveVowelCount = 0;
            consecutiveConsonantCount++;
        }

        // ee, oo를 제외한 동일 문자 연속 검사
        if (prevChar === char && !['e', 'o'].includes(char)) {
            return `<${password}> is not acceptable.`;
        }

        // 모음 또는 자음이 3개 연속으로 오는 경우 검사
        if (consecutiveVowelCount >= 3 || consecutiveConsonantCount >= 3) {
            return `<${password}> is not acceptable.`;
        }

        prevChar = char;
    }

    // 모음이 하나도 없는 경우 검사
    if (!hasVowel) {
        return `<${password}> is not acceptable.`;
    }

    return `<${password}> is acceptable.`;
}


input.forEach(word => {
    if (word === "end") return; 
    console.log(isAcceptable(word));
});
