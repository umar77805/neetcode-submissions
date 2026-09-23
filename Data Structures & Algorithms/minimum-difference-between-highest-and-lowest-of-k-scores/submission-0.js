class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) =>  a - b);
        let min = Infinity;

        let left = 0, right = k - 1;
        while (right < nums.length) {
            min = Math.min(min, nums[right] - nums[left]);
            left++;
            right++;
        }

        return min;
    }
}
