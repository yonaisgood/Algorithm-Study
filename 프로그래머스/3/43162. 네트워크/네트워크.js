function solution(n, computers) {
    const visited = Array(n).fill(false);

    function bfs(start) {
        let queue = [start]; 
        visited[start] = true; 

        while (queue.length > 0) {
            let node = queue.shift(); 

            for (let i = 0; i < n; i++) {
                
                if (computers[node][i] === 1 && !visited[i]) {
                    visited[i] = true;  
                    queue.push(i);      
                }
            }
        }
    }

    // 네트워크 개수
    let networkCount = 0;

    // 모든 컴퓨터를 순차적으로 탐색
    for (let i = 0; i < n; i++) {
        // 아직 방문하지 않은 컴퓨터에서 BFS 시작
        if (!visited[i]) {
            bfs(i);          // BFS 탐색으로 네트워크를 탐색
            networkCount++;  // 새로운 네트워크를 발견했으므로 개수 증가
        }
    }

    return networkCount;  // 네트워크의 개수를 반환
}
