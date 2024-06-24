function solution(s) {
    let charactor = s.split("")
    
        if(s.length == 4 || s.length == 6){
            for(ch of charactor){
              if(!(ch >= 0 && ch <= 9))
                  return false
            }           
            return true;
        }return false;
}