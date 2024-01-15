function solution(s) {
    let center = parseInt(s.length/2)
    if(s.length % 2 != 0) return s[center]
    else return s.slice(center-1,center+1)
    
}