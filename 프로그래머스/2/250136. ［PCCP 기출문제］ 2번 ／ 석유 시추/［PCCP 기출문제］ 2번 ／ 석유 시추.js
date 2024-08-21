function solution(land) {
    let n = land.length;
    let m = land[0].length;
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    let result = Array(m).fill(0);
    let visited = Array.from({ length: n }, () => Array(m).fill(0));

    
    function bfs(a, b) {
        let count = 0;
        visited[a][b] = 1;
        let queue = [];
        queue.push([a, b]);
        let minY = b, maxY = b;

        while (queue.length > 0) {
            let [x, y] = queue.shift();
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
            count++;

            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];

                if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
                    continue;
                }
                if (visited[nx][ny] === 0 && land[nx][ny] === 1) {
                    visited[nx][ny] = 1;
                    queue.push([nx, ny]);
                }
            }
        }

        
        for (let i = minY; i <= maxY; i++) {
            result[i] += count;
        }
    }

    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (visited[i][j] === 0 && land[i][j] === 1) {
                bfs(i, j);
            }
        }
    }

    
    let answer = Math.max(...result);
    return answer;
}
