function solution(s) {
    var answer = '';
    var count = 0;

    for(var i=0; i<s.length; i++) {
        console.log(s[i])
        if(s[i] == ' '){
            count = 0;
            answer += ' '
        } else {
            if(count % 2 == 0) {
                answer += s[i].toUpperCase();
            } else {
                answer += s[i].toLowerCase();
            }
            count++;
        }

    }


    return answer;
}