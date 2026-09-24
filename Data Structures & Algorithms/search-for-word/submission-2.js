class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const n = board.length, m = board[0].length, l = word.length;

        function dfs(i, j, w) {
            if (w === l) return true;
            if (i < 0 || i >= n || j < 0 || j >= m) return false;
            if (board[i][j] !== word[w]) return false;

            // mark as visited
            const temp = board[i][j];
            board[i][j] = '#';

            // explore 4 directions
            const found =
                dfs(i + 1, j, w + 1) ||
                dfs(i - 1, j, w + 1) ||
                dfs(i, j + 1, w + 1) ||
                dfs(i, j - 1, w + 1);

            // backtrack
            board[i][j] = temp;

            return found;
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === word.charAt(0) && dfs(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
