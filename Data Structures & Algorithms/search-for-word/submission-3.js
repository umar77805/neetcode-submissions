class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const m = board.length, n = board[0].length, o = word.length;

        function dfs(i, j, k, visited = new Set()) { // i, j = board coord, k = word index (represent curr letter we are after)
            if (k === o) return true;

            if (i < 0 || j < 0 || i >= m || j >= n || k >= o) return false;
            
            const key = `${i}+${j}`;
            if (visited.has(key) || board[i][j] !== word.charAt(k)) return false;

            visited.add(key);
            const found = dfs(i - 1, j, k + 1, visited) || dfs(i + 1, j, k + 1, visited) || dfs(i, j - 1, k + 1, visited) || dfs(i, j + 1, k + 1, visited);
            visited.delete(key);

            return found;
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === word.charAt(0) && dfs(i, j, 0)) return true;
            }
        }

        return false;
    }
}
