class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(c, target) {
        c.sort((a, b) => a - b);
        const res = [], sol = [];

        function backtrack(i = 0, sum = 0) {
            if (sum === target) {
                res.push([...sol]);
                return;
            }
            if ((i === c.length) || (sum > target)) return;

            sol.push(c[i]);
            backtrack(i + 1, sum + c[i]);
            sol.pop();

            while ((i < c.length) && (c[i] === c[i + 1])) i++;
            backtrack(i + 1, sum);
        }

        backtrack();
        return res;
    }
}
