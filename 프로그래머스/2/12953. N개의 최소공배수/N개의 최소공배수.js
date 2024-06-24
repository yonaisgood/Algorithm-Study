function solution(arr) {
   //최대공약수, 유클리드 호제법
    function gcd(a,b){
        return b === 0? a : gcd(b, a % b)
    }
    
    //최소공배수
    function lcm(a,b){
        return (a * b) / gcd(a,b)
    }
    
    return arr.reduce((acc, val)=> lcm(acc ,val))
}