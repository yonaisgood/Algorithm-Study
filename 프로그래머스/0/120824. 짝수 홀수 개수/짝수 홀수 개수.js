function solution(num_list) {
    const odd = num_list.filter(v => v % 2 !== 0)
    return [num_list.length - odd.length, odd.length]
}