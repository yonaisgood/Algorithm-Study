function solution(n, slicer, num_list) {
    let answer = [];
    let a = slicer[0];
    let b = slicer[1];
    let c = slicer[2];

    if (n === 1) {
        answer = num_list.slice(0, b+1);
    } else if (n === 2) {
        answer = num_list.slice(a);
    } else if (n === 3) {
        answer = num_list.slice(a, b + 1);
    } else if (n === 4) {
        answer = num_list.slice(a, b + 1).filter((_, index) => index % c === 0);
    }

    return answer;
}