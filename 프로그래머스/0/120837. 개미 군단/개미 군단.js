function solution(hp) {
    let answer = 0;

    while (hp > 0) {
        let first = Math.floor(hp / 5);
        hp -= first * 5;

        let second = Math.floor(hp / 3);
        hp -= second * 3;

        let third = Math.floor(hp / 1); 
        hp -= third * 1;

        answer += first + second + third;
    }

    return answer;
}
