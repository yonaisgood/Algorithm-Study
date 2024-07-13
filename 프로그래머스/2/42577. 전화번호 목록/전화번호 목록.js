function solution(phone_book) {
    const numbers = new Set(phone_book);
    
    for(const checkNum of phone_book){
        for(let i = 0; i < checkNum.length; i++){
            let isThereNum = checkNum.slice(0, i);
            if(numbers.has(isThereNum)) return false
        }
    }
    
    return true;
    
    
}
