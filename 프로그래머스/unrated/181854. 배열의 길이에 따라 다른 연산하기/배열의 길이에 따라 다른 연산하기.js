function solution(arr, n) {
    
   let answer = arr.map((v,idx)=>{
       if(arr.length % 2 == 0){
           return idx % 2 != 0? v+n : v;
           }
       else{
           return idx % 2 == 0? v+n : v
           }
   })
    return answer;
}