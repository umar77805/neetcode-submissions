class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        const res = new Array(2);

        let left = 0, right = n - 1;
        while (left < right) {
            const sum = nums[left] + nums[right];
            
            if (sum === target) {
                res[0] = left + 1;
                res[1] = right + 1;
                return res;
            } else if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
}
