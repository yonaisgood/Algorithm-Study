function solution(arr, k) {
    var answer = [];
    var usedNumbers = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (!usedNumbers.has(arr[i])) {
            answer.push(arr[i]);
            usedNumbers.add(arr[i]);
        }
    }

    while (answer.length < k) {
        answer.push(-1);
    }

    return answer.slice(0, k);
}
