function solution(num_list) {
    let number = num_list.sort((a,b) => a-b)
    
    return number.slice(5);
}