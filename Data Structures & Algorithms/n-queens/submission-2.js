class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    
    solveNQueens(n) {
        const res = [];

        const col = new Set();
        const right = new Set();
        const left = new Set();

        const board = [];

        function search(start, end) {
            const solutions = [];

            function backtrack(row) {
                if (row === n) {
                    solutions.push([...board]);
                    return;
                }

                // Only restrict the first row.
                const from = row === 0 ? start : 0;
                const to = row === 0 ? end : n;

                for (let c = from; c < to; c++) {

                    if (
                        col.has(c) ||
                        right.has(row + c) ||
                        left.has(row - c)
                    ) continue;

                    board.push(
                        '.'.repeat(c) +
                        'Q' +
                        '.'.repeat(n - c - 1)
                    );

                    col.add(c);
                    right.add(row + c);
                    left.add(row - c);

                    backtrack(row + 1);

                    board.pop();

                    col.delete(c);
                    right.delete(row + c);
                    left.delete(row - c);
                }
            }

            backtrack(0);
            return solutions;
        }

        // Explore only the left half.
        const half = Math.floor(n / 2);

        const leftSolutions = search(0, half);

        // Add original and mirrored solutions.
        for (const solution of leftSolutions) {
            res.push(solution);

            res.push(
                solution.map(row => [...row].reverse().join(''))
            );
        }

        // For odd n, explore the middle column separately.
        if (n % 2 === 1) {
            const middleSolutions = search(half, half + 1);
            res.push(...middleSolutions);
        }

        return res;
    }

}
