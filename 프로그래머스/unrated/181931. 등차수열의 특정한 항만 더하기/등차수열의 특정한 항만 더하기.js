function solution(a, d, included) {
    let trueArr = []
    for(i=0; i<included.length; i++){
        if(included[i] === true){
            trueArr.push(a+(i*d))
        }
    }
  return  result = trueArr.reduce((acc,cur,inx)=>(acc+cur))
}