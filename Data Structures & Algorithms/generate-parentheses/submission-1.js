class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [], sol = [];
        
        function backtrack(left = n, right = n) {
            if (left === 0 && right === 0) {
                res.push(sol.join(''));
                return;
            }
            if ((left < 0) || (right < 0)) return;

            sol.push('(');
            backtrack(left - 1, right);
            sol.pop()

            if (left < right) {
                sol.push(')');
                backtrack(left, right - 1);
                sol.pop();
            }
        }

        backtrack();
        return res;
    }
}
