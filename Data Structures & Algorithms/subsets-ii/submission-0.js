class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) =>  a - b);
        const n = nums.length;
        const res = [], sol = [];

        function backtrack(i) {
            if (i === n) {
                res.push([...sol]);
                return;
            }

            sol.push(nums[i]);
            backtrack(i + 1);
            sol.pop()

            while (i + 1 < n && nums[i] === nums[i + 1]) i++;
            backtrack(i + 1);
        }

        backtrack(0);
        return res;
    }
}
