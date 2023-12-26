function solution(todo_list, finished) {
    var answer = [];
    
    finished.map((v,idx)=>
                 v == false ? answer.push(todo_list[idx]) : "")
    return answer;
}