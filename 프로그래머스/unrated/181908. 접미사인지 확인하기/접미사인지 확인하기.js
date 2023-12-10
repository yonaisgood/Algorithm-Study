function solution(my_string, is_suffix) {
    
    
    for (let i = 0; i < my_string.length; i++) {
        let suffix = my_string.slice(i);
        
        if( suffix === is_suffix){
            return 1;
        }
    } return 0;
    
}