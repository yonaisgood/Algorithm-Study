function solution(myString) {
    var answer = myString;
    
    answer = answer.split("").map((v,idx)=>{
        if(v == "a" || v == "A"){
            return "A"
        }
        else if(v == v.toUpperCase()){
            return v.toLowerCase()
        }      
        
        return v
    })
    return answer.join("");
}