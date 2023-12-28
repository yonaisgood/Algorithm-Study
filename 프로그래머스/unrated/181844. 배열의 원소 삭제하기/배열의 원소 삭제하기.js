function solution(arr, delete_list) {
    let answer = arr.filter((v)=>
        !delete_list.includes(v))
        return answer;
}