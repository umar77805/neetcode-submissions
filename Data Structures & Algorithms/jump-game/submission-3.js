class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const n = nums.length;
        let res = n - 1;

        for (let i = n - 2; i >= 0; i--) {
            if (nums[i] >= (res - i)) res = i;
        }

        return res === 0;
    }
}
