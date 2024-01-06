function solution(phone_book) {
    let phoneNumber = {};
    
    for(const number of phone_book){
        phoneNumber[number] = true
    }
    
    for(const number of phone_book){
        for(let i = 1; i < number.length; i++){
            const checkNum = number.slice(0,i)    
            if(phoneNumber[checkNum])
            return false
        }
    }
    return true;
}