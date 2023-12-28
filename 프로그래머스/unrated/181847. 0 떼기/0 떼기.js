function solution(n_str) {
    let n_strArr = [...n_str];
    
    let firstNonZeroIndex = n_strArr.findIndex(char => char !== "0"); 
    let result = firstNonZeroIndex !== -1 ? n_strArr.slice(firstNonZeroIndex).join("") : "0";
    
    return result;
}