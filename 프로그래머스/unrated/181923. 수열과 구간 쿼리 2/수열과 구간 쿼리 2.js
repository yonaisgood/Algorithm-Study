function solution(arr, queries) {
    var answer = [];
    
    for (let q = 0; q < queries.length; q++) {
        let query = queries[q];
        let start = query[0];
        let end = query[1];
        let k = query[2];
        let minGreater = -1;

        for (let i = start; i <= end; i++) {
            if (arr[i] > k && (minGreater === -1 || arr[i] < minGreater)) {
                minGreater = arr[i];
            }
        }

        answer.push(minGreater);
    }

    return answer;
}