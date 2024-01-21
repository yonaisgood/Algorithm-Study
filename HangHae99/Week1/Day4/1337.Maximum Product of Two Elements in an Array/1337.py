class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        heap = []

        for i in range(len(mat)):
            soldiers = sum(mat[i])
            heapq.heappush(heap, (soldiers, i))

        answer = [heapq.heappop(heap)[1] for _ in range(k)]
        return answer