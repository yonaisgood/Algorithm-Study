function solution(myString) {    
    return myString = myString.split("x").sort().filter(v => v != "");
}