function solution(a, b) {
    let once = `${a}${b}`
    let twice = 2*a*b
    return once >= twice? Number(once) : twice;
}