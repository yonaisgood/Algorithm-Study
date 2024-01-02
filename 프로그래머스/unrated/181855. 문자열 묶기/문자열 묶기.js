function solution(strArr) {
    var answer = 0;

    let max = 0;

    strArr.map((a)=>{
        if(max<a.length){
            max = a.length
        }
    })

    for(let i = 1; i<=max; i++){
        let count = 0;
        strArr.map((a)=>{
            if(a.length == i){
                count += 1;
            }
        })
        if(count > answer){
            answer = count;
        }

    }


    return answer;
}