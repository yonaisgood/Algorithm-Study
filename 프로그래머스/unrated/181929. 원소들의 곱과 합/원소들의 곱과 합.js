function solution(num_list) {
   let sumPlus = num_list.reduce((acc, cur) =>acc+cur,0);
   let sumMultiply = num_list.reduce((acc, cur) =>acc*cur,1);
    
    return sumMultiply < sumPlus**2 ? 1 : 0
}