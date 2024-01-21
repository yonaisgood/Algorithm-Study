function solution(d, budget) {
   const needsMoney = d.sort((a,b)=>a-b);
    let answer = 0;
    let totalPrice = 0;
    //1,2,3,4,5
    needsMoney.forEach(price=>{
        if(totalPrice + price <= budget){
            answer += 1;
            totalPrice += price;
        }
    })
   return answer
}