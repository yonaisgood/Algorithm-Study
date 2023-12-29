function solution(myStr) {   

    let sliceString = myStr
    .split("a").join("_").split("b").join("_").split("c").join("_").split("_").filter(v=>v.length != 0)
    
    return sliceString.length > 0 ? sliceString : ["EMPTY"] ;
}