function solution(my_string, alp) {
    let answer = [...my_string];
    answer = answer.map((v,idx)=>{
        if(v == alp){
            return v.toUpperCase();
        }
        return v
    })
    return answer.join("");
}