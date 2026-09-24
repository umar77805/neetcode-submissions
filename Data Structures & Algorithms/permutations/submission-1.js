class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const n = nums.length;
        const res = [], sol = [];
        const trackSet = new Set();

        function backtrack() {
            if (sol.length === n) {
                res.push([...sol]);
                return;
            }
            
            for (let i = 0; i < n; i++) {
                if (!trackSet.has(nums[i])) {
                    trackSet.add(nums[i])
                    sol.push(nums[i]);
                    backtrack()
                    sol.pop()
                    trackSet.delete(nums[i])
                }
            }

        }

        backtrack()
        return res;
    }
}
