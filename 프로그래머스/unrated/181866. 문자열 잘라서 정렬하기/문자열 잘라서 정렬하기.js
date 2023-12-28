function solution(myString) {    
    let myArr = myString.split("x").sort();
    myArr = myArr.filter(v=>v!="") 
   
 
   return myArr;
}