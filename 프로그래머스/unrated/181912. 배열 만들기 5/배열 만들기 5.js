function solution(intStrs, k, s, l) {
    let arr = [];
    
    let sliceArr = intStrs.map(el=>el.slice(s,s+l));
    
    for(let i = 0; i <sliceArr.length; i++){
        if(sliceArr[i] > k){
            arr.push(Number(sliceArr[i]))
        }
    }
    return arr;
}