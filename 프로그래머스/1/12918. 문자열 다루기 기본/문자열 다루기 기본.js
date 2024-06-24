function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    let a = s.split("").filter((v)=>!isNaN(v))
    
    return a.length === s.length ? true : false
}