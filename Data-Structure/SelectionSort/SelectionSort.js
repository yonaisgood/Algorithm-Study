function selectionSort(arr){
    const n = arr.length;

    for (let i = 0; i < n -1; i++){
        let minimum = i;

        for (let j = i + 1; j < n; j++){
            if(arr[j] < arr[minimum]){
                minimum = j
            }
        }

        if(minimum != i){
            [arr[minimum],arr[i]] = [arr[i], arr[minimum]]
        }
    }
    return arr;
}