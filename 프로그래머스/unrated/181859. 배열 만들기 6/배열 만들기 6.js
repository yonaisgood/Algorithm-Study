function solution(arr) {
    const answer =  arr.reduce((acc, cur, idx) => {
        if (idx < arr.length) {
            if (!acc.length) {
                acc.push(arr[idx]);
            }
            else if (acc.length) {
                if (acc[acc.length - 1] === arr[idx]) {
                    acc.pop();
                }
                else if (acc[acc.length - 1] !== arr[idx]) {
                    acc.push(arr[idx]);
                }
            }
        }

        return acc;
    }, []);

    return answer.length ? answer : [-1];
}