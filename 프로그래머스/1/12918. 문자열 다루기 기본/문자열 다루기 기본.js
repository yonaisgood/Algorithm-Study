function solution(s) {
    if(s.length !== 4 && s.length !== 6) return false
        
    let charactor = s.split("").filter((i)=> !isNaN(i))
    return charactor.length === s.length ? true : false
}