class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0, right = nums.length - 1;
        let min = Infinity;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            // at least one half will be sorted each time
            if (nums[left] <= nums[mid]) {
                min = Math.min(min, nums[left]);
                left = mid + 1;
            } else {
                min = Math.min(min, nums[mid]);
                right = mid - 1;
            }
        }

        return min;
    }
}
