function solution(a, b) {
    //가우스의 덧셈공식 a ~ b 까지 더한 값은 (a+b) * (b-a+1) * 1/2
    return (a + b) * (Math.abs(b-a)+1) * 1/2
}