function solution(arr, queries) {
    var answer = [];
    
    for (let q = 0; q < queries.length; q++) {
        let query = queries[q];
        let start = query[0];
        let end = query[1];
        let k = query[2];
        let minGreater = Infinity; 

        for (let i = start; i <= end; i++) {
            if (arr[i] > k && arr[i] < minGreater) {
                minGreater = arr[i];
            }
        }

        if (minGreater === Infinity) {
            answer.push(-1);
        } else {
            answer.push(minGreater);
        }
    }

    return answer;
}