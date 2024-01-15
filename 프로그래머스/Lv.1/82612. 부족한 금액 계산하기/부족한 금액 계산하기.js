function solution(price, money, count) {
    let answer = 0;    
    
    for(let i = 1; i < count + 1; i++){
        answer += price * i 
    }
    let needMoney = money - answer; 
    return  needMoney < 0 ? Math.abs(needMoney) : 0
}