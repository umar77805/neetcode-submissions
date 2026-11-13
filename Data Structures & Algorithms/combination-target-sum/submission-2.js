class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [], sol = [];

        function backtrack(i = 0, sum = 0) {
            if (sum === target) {
                res.push([...sol]);
                return;
            }

            if ((sum > target) || (i === nums.length)) return;

            sol.push(nums[i]);
            backtrack(i, sum + nums[i]);
            sol.pop();

            backtrack(i + 1, sum);
        }

        backtrack();
        return res;
    }
}
