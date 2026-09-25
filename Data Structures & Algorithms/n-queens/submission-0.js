class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const col = new Set(), posD = new Set(), negD = new Set();
        const board = Array.from({length: n}, () => new Array(n).fill("."));
        const res = [];

        function backtrack(r) {
            if (r === n) {
                res.push(board.map((arr) => arr.join("")));
                return;
            }

            for (let c = 0; c < n; c++) {
                if (col.has(c) || posD.has(r + c) || negD.has(r - c)) continue;

                col.add(c);
                posD.add(r + c);
                negD.add(r - c);
                board[r][c] = 'Q';

                backtrack(r + 1);

                col.delete(c);
                posD.delete(r + c);
                negD.delete(r - c);
                board[r][c] = '.';
            }
        }

        backtrack(0);
        return res;
    }
}
