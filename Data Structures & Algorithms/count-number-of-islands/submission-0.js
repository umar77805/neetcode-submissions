class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const m = grid.length, n = grid[0].length;

        function fill(i, j) {
            if (i >= m || i < 0 || j < 0 || j >= n || grid[i][j] === '0') return;

            grid[i][j] = "0";

            fill(i - 1, j)
            fill(i + 1, j)
            fill(i, j - 1)
            fill(i, j + 1)
        }

        let islands = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] !== '0') {
                    islands++;
                    fill(i, j)
                }
            } 
        }

        return islands;
    }
}
