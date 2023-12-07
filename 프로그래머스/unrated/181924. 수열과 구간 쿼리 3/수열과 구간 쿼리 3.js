function solution(arr, queries) {
    let newArr = [...arr]; 

    for (let i = 0; i < queries.length; i++) {
        const [a, b] = queries[i]; 
        
        const temp = newArr[a];
        newArr[a] = newArr[b];
        newArr[b] = temp;
    }

    return newArr;
}