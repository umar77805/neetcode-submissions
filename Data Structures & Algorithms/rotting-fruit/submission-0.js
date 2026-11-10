class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const m = grid.length, n = grid[0].length;
        const queue = [];
        const initRotten = [];
        const adj = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 2) initRotten.push([i, j])
            }
        }

        queue.push(initRotten);
        let head = 0;

        while (head < queue.length) {
            const currRotten = queue[head++];
            const fresh = [];

            for (const [i, j] of currRotten) {
                for (const [left, right] of adj) {
                    const l = i + left, r = j + right;
                    if (l < 0 || r < 0 || l >= m || r >= n || grid[l][r] === 0 || grid[l][r] === 2) continue;

                    grid[l][r] = 2;
                    fresh.push([l, r])
                }
            }

            if (fresh.length) queue.push(fresh)
        }

        for (const row of grid) {
            for (const col of row) {
                if (col === 1) return -1;
            }
        }

        return head - 1;
    }
}
