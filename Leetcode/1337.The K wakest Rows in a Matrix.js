/*
📝 문제 & 설명 : K개의 가장 약한 열을 찾으시오 

주어진 m x n 이진 배열 mat은 1로 표시된 병사들과 0으로 표시된 민간인들을 나타냅니다. 
병사들은 민간인들의 앞에 위치해 있습니다. 즉, 각 행에서 모든 1은 해당 행의 모든 0 앞에 나타납니다.

행 i가 행 j보다 약할 경우 다음 중 하나가 참입니다:
행 i의 병사 수가 행 j의 병사 수보다 적습니다.
두 행 모두 동일한 병사 수를 가지고 있고 i < j입니다.
행렬에서 가장 약한 행부터 가장 강한 행까지 정렬된 상태로, 행렬에서 가장 약한 k개 행의 인덱스를 반환합니다.

=> 1,0 으로만 이뤄진 배열의 이진배열 mat이 주어질 때 가장 약한 열을 k만큼 찾는 것. (문제 설명이 개똥 같아)

Example 1:

Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4].
Example 2:

Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 1 
- Row 1: 4 
- Row 2: 1 
- Row 3: 1 
The rows ordered from weakest to strongest are [0,2,3,1].

🔗 문제 링크 : https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/description/

💆🏻‍♀️ 문제 풀이 :
mat을 객체에 저장해서 mat[1] 의 총합 을 저장한다. 
군인 : 1 이 적다는 것이 약하다는 뜻이니 sort로 내림차순 정렬하여 앞에서 부터 k개 slice로 반환한다. 

🛠 코드 :
*/

// 1.js로 짠 코드 
var kWeakestRows = function(mat, k) {
  //병사의 수와 인덱스를 저장할 count 
  const count = {};
  //각각의 배열 (군대) 를 돌며 모든 군인의 합을 구하고 count 객체에 군인수를 더해준다. 
  for(let i = 0; i < mat.length; i++){
      const soldiers = mat[i].reduce((acc,curr)=> acc+ curr,0)
      count[i] = soldiers;
  }
  //count객체에 저장된 군인의 총합 = value 값을 오름차순으로 정렬한다. 
  const keys = Object.keys(count).sort((a,b)=>count[a]-count[b])
  // 오름차순 되어있는 keys를 0부터 k 전까지 잘라서 k개가 든 배열로 반환한다. 
  const answer = keys.slice(0,k)
  return answer
}

//2. 파이썬 풀이
/**
 * class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        //군사수를 저장할 heap을 만든다. 
        heap = []
        mat의 길이 만큼 for문을 돌며 군사의 수를 더해준다. 
        for i in range(len(mat)):
            //배열의 합을 구할 수 있는 sum()을 사용
            soldiers = sum(mat[i])
            heapq.heappush(heap, (soldiers, i))

        answer = [heapq.heappop(heap)[1] for _ in range(k)]
        return answer
 */