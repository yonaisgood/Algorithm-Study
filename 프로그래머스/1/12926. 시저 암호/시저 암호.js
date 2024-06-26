function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer = '';

    for(var i = 0; i < s.length; i++) {
        let text = s[i];
        if(text == ' ') {
            answer += ' ';
        } else {
            let textArr = upper.includes(text) ? upper : lower;
            let index = (textArr.indexOf(text) + n) % textArr.length;
            answer += textArr[index];
        }
    }
    return answer;
}
