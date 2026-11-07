class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const sol = [], res = [];

        function backtrack(i, currSum) {
            if (currSum === target) {
                res.push([...sol]);
                return;
            }
            if ((currSum > target) || (i === nums.length)) return;

            // not pick current
            backtrack(i + 1, currSum)

            // pick current
            sol.push(nums[i]);
            backtrack(i, currSum + nums[i]);
            sol.pop()
        }

        backtrack(0, 0);
        return res;
    }
}
