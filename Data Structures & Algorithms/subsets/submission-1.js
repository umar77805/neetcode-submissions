class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const sol = [], res = [];
        
        function backtrack(i) {
            if (i === nums.length) {
                res.push([...sol]);
                return;
            }

            // not pick
            backtrack(i + 1);

            // pick
            sol.push(nums[i]);
            backtrack(i + 1)
            sol.pop()
        }

        backtrack(0);
        return res;
    }
}
