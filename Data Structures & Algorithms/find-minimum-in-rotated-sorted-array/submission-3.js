class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length;
        let left = 0, right = n - 1;
        let min = Infinity;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            // console.log(`left: ${left}`);
            // console.log(`right: ${right}`);
            // console.log(`mid: ${mid}`);
            
            min = Math.min(min, nums[mid])
            
            if (nums[left] <= nums[right]) return Math.min(min, nums[left]);

            if (nums[left] <= nums[mid]) left = mid + 1
            else right = mid - 1;
        }

        return min;
    }
}
