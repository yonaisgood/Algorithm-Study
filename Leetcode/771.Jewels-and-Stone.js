/*
📝 문제 & 설명 : 보석과 돌

주어진 문자열 jewels은 보석의 종류를 나타내며, stones는 소유한 돌을 나타냅니다. 
stones의 각 문자는 소유한 돌의 종류입니다. 소유한 돌 중에서 얼마나 많은 돌이 보석인지 알고 싶습니다.

대소문자를 구분하므로 "a"는 "A"와 다른 돌 종류로 간주됩니다.

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.

🔗 문제 링크 : https://leetcode.com/problems/jewels-and-stones/description/

💆🏻‍♀️ 문제 풀이 :
(해시테이블 이론은 간단하지만 코드로 짜려니 어렵다... ) 

먼저 돌맹이의 원소 알파벳의 이름 : 개수 => 키 : 값로 저장하는 객체를 만든다. 
그리고 jewels를 순회하며 객체에 같은 알파벳이 있는지 찾는다. 
같은 알파벳이 있을 때 마다 그 값을 초기화해준 최종값 저장 변수에 더해준다. 

🛠 코드 :
*/
// 1. 내가 짠 코드 (통과다!! 박수!!!!!)
let numJewelsInStone = function(jewels, stones) {
  let hashMap = new Map();
  let sliceJ = [...jewels];
  let sliceStone = [...stones];

  sliceStone.forEach((stone) => {
      if (hashMap.has(stone)) {
          hashMap.set(stone, hashMap.get(stone) + 1);
      } else {
          hashMap.set(stone, 1);
      }
  });

  let totalJewels = 0;
  sliceJ.forEach((jewel) => {
      if (hashMap.has(jewel)) {
          totalJewels += hashMap.get(jewel);
      }
  });

  return totalJewels;
}

// 2.멘토님 피드백 받고 수정한 코드 
let numJewelsInStones = function(jewels, stones) {
  // hash를 상용하기 위해 저장만 되면 되기 때문에 객체로 사용해도 무방하다. 
  // 변수 네이밍 통일성있고 의미 있도록 만드세요. 
  // 변수는 불변한다면 const 변한다면 let 구분해서 사용하세요. 
  const stoneCounter = {};
  let totalJewels = 0;

  //forEach를 쓰기 위해 전개구문을 사용한거라면 for of로 문자열을 반복하도록 만들어도 된다. 
  for (const stone of stones) {
    // 객체에 stones의 원소가 있는지 찾기.
      if (stoneCounter.hasOwnProperty(stone)) {
        // 있다면 해당 stone의 키 값에 ++
          stoneCounter[stone]++;
      } else {
          stoneCounter[stone] = 1;
      }
  }

  // jewels를 돌며 stoneSounter 객체에 jewel의 값이 있다면 저장 변수에 stoneCounter의 value를 더해준 후 출력한다. 
  for (const jewel of jewels) {
      if (stoneCounter.hasOwnProperty(jewel)) {
          totalJewels += stoneCounter[jewel];
      }
  }

  return totalJewels;
}