function solution(num_list) {
    let count = 0;
    
    for( num of num_list){
        let number = num;
        while(true){
            if(number == 1) break;
            if(number % 2 == 0){
               number = number / 2
                count += 1
            }else{
                number = (number - 1) / 2
                count += 1
            }
        }
    }
    return count;
}