function solution(arr, query) {
    let answer = [...arr];

    query.forEach((q, i) => {
        if (i % 2 === 0) answer = answer.slice(0, q + 1);
        else answer = answer.slice(q);
    });

    return answer;
}