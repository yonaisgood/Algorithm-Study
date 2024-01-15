function solution(phone_number) {
    let totalAnswer =""
    let answer = phone_number.slice(0,phone_number.length-4);
    for(let i = 0; i < answer.length; i++){
        totalAnswer += "*"           
    }
    return totalAnswer + phone_number.slice(phone_number.length-4);;
}