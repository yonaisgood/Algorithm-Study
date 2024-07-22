function solution(nums) {
    let hashMap = new Map();
    
    nums.forEach((e)=>{
        if(hashMap.has(e)){
            hashMap.set(e,hashMap.get(e)+1)
        }else{
            hashMap.set(e,1)            
        }
    })
    return hashMap.size >= nums.length/2 ? nums.length/2 : hashMap.size
}
