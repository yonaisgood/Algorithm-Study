function solution(s) {
    const answer = s.split(" ");
    let changeFirstWord = []
    for(let i = 0; i < answer.length; i++){
       if(answer[i].charAt(0) != NaN){
           changeFirstWord.push(answer[i].charAt(0).toUpperCase() + answer[i].slice(1).toLowerCase()) 
       }else{
           changeFirstWord.push(answer[i])
       }
    }
    return changeFirstWord.join(" ");
}