function solution(myStr) {
    const list = myStr.split(/[abc]/).filter(str => str);
    return list.length ? list : ["EMPTY"];
}