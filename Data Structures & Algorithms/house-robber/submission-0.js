class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const arr = Array.from({length: nums.length}).fill(0);
        arr[0] = nums[0];
        arr[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            arr[i] = Math.max(nums[i] + arr[i - 2], arr[i - 1]);
        }

        return arr[nums.length - 1];
    }
}
