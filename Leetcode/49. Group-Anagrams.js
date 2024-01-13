/*
📝 문제 & 설명 : 애너그램 그룹화
strings 배열이 주어지면 철자 바꾸기를strs 함께 그룹화하십시오 . 
어떤 순서로든 답변을 반환할 수 있습니다 .

아나그램은 일반적 으로 모든 원래 문자를 정확히 한 번 사용하여 다른 단어나 구문의 문자를 재배열하여 형성된 단어나 구문입니다.



Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]


Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// 애너그램 -> 어떤 문자를 재배열하여 다른 뜻을 가지는 다른 단어로 바꾸는 것

//💆🏻‍♀️ 문제 풀이 :
// 먼저 배열을 알파벳순으로 재정렬한 배열을 만든다. 그리고 하나씩 정답을 도출 하기 위한 
// 객체에 저장한다. for of 로 원소 하나하나를 돌면서 이미 있는 애라면 추가 처음이라면
// 객체의 키 값을 새로 만든다. 
// 모든 원소의 값을 다 돌고 나면 객체의 Object.value(객체) 를 출력해 준다. 

//🛠 코드 :
var groupAnagrams = function(strs) {
    const answerAnagrams = {};

    for (const str of strs){
        const sortStr = str.split("").sort().join();
        // 9번째 줄 실행되면 => sortStr => ["aet", "aet", "ant", "aet", "aet", "ant", "abt"]
        /* answerAnagrams = {
            "aet" : ["eat", "tea", "ate"]
            "ant" : ["tan","nat"]
            "abt" : ["bat"]
        }
        */
        if(answerAnagrams[sortStr]){
            answerAnagrams[sortStr].push(str);
        }else{
            answerAnagrams[sortStr] = [str];
        }
    }

    return Object.values(answerAnagrams);
};

