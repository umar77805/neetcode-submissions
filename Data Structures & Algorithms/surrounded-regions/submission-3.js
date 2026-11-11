class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const m = board.length, n = board[0].length;

        function flip(i, j) {
            if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] === 'X' || board[i][j] === 'T') return;

            board[i][j] = 'T';
            flip(i + 1, j);
            flip(i - 1, j);
            flip(i, j + 1);
            flip(i, j - 1);
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === 'O' && (i === 0 || i === m - 1 || j === 0 || j === n - 1)) flip(i, j, 'T')
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === 'O') board[i][j] = 'X'
                if (board[i][j] === 'T') board[i][j] = 'O'
            }
        }
    }
}
