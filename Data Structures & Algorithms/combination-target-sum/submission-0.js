class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const n = nums.length;
        const res = [], sol = [];

        function backtrack(i, currSum) {
            if (currSum === target) {
                res.push([...sol]);
                return
            }

            if ((currSum > target) || (i === n)) return;
            
            sol.push(nums[i]);
            backtrack(i, currSum + nums[i]);
            sol.pop();

            backtrack(i + 1, currSum);
        }

        backtrack(0, 0);
        return res;
    }
}
