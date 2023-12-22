function solution(arr) {
   let startInx = arr.indexOf(2);
    let lastInx = arr.lastIndexOf(2);
    
    return startInx + lastInx < 1 ? [-1] : arr.slice(startInx,lastInx+1)
}