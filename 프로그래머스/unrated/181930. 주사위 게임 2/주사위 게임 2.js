function solution(a, b, c) {
    
    let caseEveryDifferent = a !== b && a !== c && b !== c;
    let caseOnlyTwoSame = a === b && b !==c || a === c && b !==c || b === c && a!== c;
    let caseSame = a === b &&  b === c;
    
    switch (true) {
  case caseEveryDifferent:
    return a+b+c;
    break;
  case caseOnlyTwoSame:
    return (a + b + c) * (a**2 + b**2 + c**2 );
    break;
 case caseSame:
    return (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3 );
    break;
}
    
}