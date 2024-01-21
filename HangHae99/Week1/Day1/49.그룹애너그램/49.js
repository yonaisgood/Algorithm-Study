/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let strArr = {};

    for(str of strs){
        const sortArr = str.split("").sort().join();
        if(strArr[sortArr]){
            strArr[sortArr].push(str)
        }else{
            strArr[sortArr] = [str];
        }
    }

    return Object.values(strArr);
};