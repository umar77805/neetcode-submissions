class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        // left diag: 00 11 22 33 44 - diff is same
        // right diag: 03 12 21 30 - sum is same

        const res = [], sol = [];
        const col = new Set(), right = new Set(), left = new Set();

        function backtrack(row = 0, colu = 0) {
            if (sol.length === n) {
                res.push([...sol]);
                return;
            }

            if (colu === n) return;

            if (col.has(colu) || right.has(row + colu) || left.has(row - colu)) {
                backtrack(row, colu + 1);
                return;
            }

            sol.push(Array.from({length: n}, (_, idx) => idx === colu ? 'Q' : '.').join(''));
            col.add(colu);
            right.add(row + colu);
            left.add(row - colu);

            backtrack(row + 1, 0)

            sol.pop();
            col.delete(colu)
            right.delete(row + colu);
            left.delete(row - colu);

            backtrack(row, colu + 1)

        }

        backtrack();
        return res;
    }
}
