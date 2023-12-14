function solution(arr) {
    let stk = [];
    
    
    for(let i = 0; i < arr.length; i++){
    let last = stk[stk.length-1];
        if(stk.length == 0 || last < arr[i]){
            stk.push(arr[i])  
        }else  if (last >= arr[i]){
            stk.pop()
            i--
        }
    }
    return stk;
}