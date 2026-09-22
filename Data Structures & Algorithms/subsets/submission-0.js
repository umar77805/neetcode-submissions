class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const n = nums.length;
        const res = [], sol = [];

        function backtrack(i) {
            if (i === n) {
                res.push([...sol]);
                return;
            }

            // Negative scenario
            backtrack(i + 1);

            // Positive scenario
            sol.push(nums[i]);
            backtrack(i + 1);
            sol.pop()
        }

        backtrack(0);
        return res;
    }
}
