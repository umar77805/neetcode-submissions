class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [], sol = [];

        function backtrack(i) {
            if (i === nums.length) {
                res.push([...sol]);
                return;
            }

            backtrack(i + 1);

            sol.push(nums[i]);
            backtrack(i + 1);
            sol.pop();
        }

        backtrack(0);
        return res;
    }
}
