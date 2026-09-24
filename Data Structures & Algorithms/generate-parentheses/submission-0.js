class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [], sol = [];

        function backtrack(open, close) {
            if (sol.length === n * 2) {
                res.push(sol.join(''));
                return;
            }

            if (open < n) {
                sol.push('(');
                backtrack(open + 1, close);
                sol.pop()
            }

            if (open > close) {
                sol.push(')');
                backtrack(open, close + 1);
                sol.pop()
            }
        }

        backtrack(0, 0);
        return res;
    }
}
