function solution(my_string, indices) {
    
    let arr = [...my_string]
  
    indices.forEach(index=>arr[index]="")
    return arr.join("");
}