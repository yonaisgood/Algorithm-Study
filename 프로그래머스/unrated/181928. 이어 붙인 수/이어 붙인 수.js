function solution(num_list) {
    let even ="";
    let odd = "";
    let firstNumber = num_list[0]
    
    for (i=0; i<num_list.length; i++){
        if(num_list[i]%2 === 0){
            even += num_list[i]
        }else{
            odd += num_list[i]
        }
    }
   return Number(odd) + Number(even);
}