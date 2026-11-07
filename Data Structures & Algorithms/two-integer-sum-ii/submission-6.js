class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        
        for (let i = 0; i < n; i++) {
            const reTarget = target - nums[i];
            let left = i + 1, right = n - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);

                if (nums[mid] === reTarget) return [i + 1, mid + 1];
                if (nums[mid] < reTarget) left = mid + 1
                else right = mid - 1;
            }
        }

        return [-1, -1];
    }
}
