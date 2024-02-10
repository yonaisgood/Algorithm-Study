function solution(sizes) {
    
    let widthMax = [];
    let heightMax = [];
    
    for(let i = 0; i < sizes.length; i++){
        sizes[i].sort((a,b)=>b-a)
        
        widthMax.push(sizes[i][0])
        heightMax.push(sizes[i][1])
    }
    return Math.max(...widthMax) * Math.max(...heightMax);
}