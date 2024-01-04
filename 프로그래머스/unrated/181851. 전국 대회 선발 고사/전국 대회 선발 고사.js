function solution(rank, attendance) {
    let result = [];
    
    for (let i = 0; i < rank.length; i++){
        if(attendance[i]){
            result.push(rank[i])
        }
    }
    result.sort((a,b)=>a-b);
    
    function answer(idx) {
        return rank.indexOf(result[idx]);
    }
      
    return (10000 * answer(0)) + (100 * answer(1)) + answer(2)
}