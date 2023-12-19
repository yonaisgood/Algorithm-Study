function solution(s){
    
   let changeAlpa = s.toLowerCase();
    let pAmount = 0;
    let yAmount = 0;
    
    for (let i = 0; i < s.length; i++){
        if(changeAlpa[i] == "p"){
            pAmount += 1
        }else if(changeAlpa[i] =="y" ){
            yAmount += 1
        }
    }

    return pAmount == yAmount ;
}