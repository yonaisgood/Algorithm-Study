function solution(str_list, ex) {
    let filterArr = '';
    
    filterArr = str_list.filter(v=>!v.includes(ex));
    
    return filterArr.join("");
}