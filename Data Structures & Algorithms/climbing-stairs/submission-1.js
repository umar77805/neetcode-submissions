class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        function dfs(i, memo = new Map()) {
            if (memo.has(i)) return memo.get(i);
            if (i >= n) return i == n;
            const result = dfs(i + 1, memo) + dfs(i + 2, memo);

            memo.set(i, result);
            return result;
        };
        return dfs(0);
    }
}
