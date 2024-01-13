/*
📝 문제 & 설명 : 이진트리의 합

주어진 이진 탐색 트리의 루트 노드와 두 정수 low 및 high가 있을 때, 
값이 [low, high] 범위에 속하는 모든 노드의 값을 합산하여 반환합니다.

Example 1:

Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.


Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.


Constraints:

The number of nodes in the tree is in the range [1, 2 * 104].
1 <= Node.val <= 105
1 <= low <= high <= 105
All Node.val are unique.

🔗 문제 링크 : https://leetcode.com/problems/range-sum-of-bst/description/

💆🏻‍♀️ 문제 풀이 :
이진트리의 진행방향과, 탐색방법을 알고 있다면 크게 어렵지 않은 문제다. 그런데 그 것을 하지 못하여 오래 걸렸다.

🛠 코드 :
*/
// 1. 내가 (구글링이랑) 짠 코드 
// ✅ 함수 표현식은 호이스팅이 발생하지 않아 => 함수가 선언되기 전에 호출하면 오류가 발생해
var rangeSumBST = function (root, low, high) {
    let sum = 0;
    //노드 순회 순서 => 
     //예시1. 10 -> sum에 추가 
     // left 노드 -> 5 -> 3 -> null return -> node.right null -> 다시 3 -> 5 -> 조사하지 않은 right노드 7
     // 7의 left null -> 다시 7 -> node.right null -> 7 -> 5 -> 10 -> 
     // 조사하지 않은 right.node 15 ...... 반복 후 18의 right노드 null -> 15 -> 10 종료
    function traverse(node) {
        if (node == null) return;

        if (low <= node.val && node.val <= high) {
            sum += node.val;
        }

        traverse(node.left);
        traverse(node.right);
    }

    // 루트 노드로 초기 함수 호출
    traverse(root);

    return sum;
};

// 정용멘토님 코멘트 
//👉 코드 가독성을 높이고 싶다면 traverse를 외부로 빼서 의존성을 낮춰라 
var rangeSumBST = function (root, low, high) {
    let sum = 0;

    traverse(root);
    return sum;

    // 외부로 빼낸 traverse 함수
    function traverse(node) {
        if (node == null) return;

        if (low <= node.val && node.val <= high) {
            sum += node.val;
        }

        traverse(node.left);
        traverse(node.right);
    }
};

// 3. 멘토님 코드 JS 화
/* var rangeSumBST = function(root, low, high) {
    if(!root) return 0;

    if(root.val < low) return rangeSumBST(root.right, low, high);
    else if(root.val > high) return rangeSumBST(root.left, low, high);
    else return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
 };*/