class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(c, target) {
        c.sort((a, b) => a - b);
        const n = c.length;
        const res = [], sol = [];

        function backtrack(i, currSum) {
            if (currSum === target)  {
                res.push([...sol]);
                return;
            }

            if ((i === n) || currSum > target) return;

            sol.push(c[i]);
            backtrack(i + 1, currSum + c[i]);
            sol.pop()

            while (i + 1 < n && c[i] === c[i + 1]) i++;
            backtrack(i + 1, currSum);
        }

        backtrack(0, 0);
        return res;
    }
}
