function solution(myString) {
    
    let beforeL = ["a","b","c","d","e","f","g","h","i","j","k"]    
    
    beforeL.forEach(char => {
        myString = myString.split(char).join("l");
    });

    return myString;
}