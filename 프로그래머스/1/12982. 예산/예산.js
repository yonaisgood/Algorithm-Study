function solution(d, budget) {
    const needsMoney = d.sort((a,b)=>a-b)
    let answer = 0;
    let total = 0;
    
    needsMoney.forEach((price)=>{
        if(total+price <= budget){
            answer += 1;
            total += price;
        }
    })
    return answer;
}