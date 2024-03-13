function solution(strings, n) {
    let sortedStr = strings.sort();
    return sortedStr.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}