class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let c1 = 0, c2 = 0;
        for (let i = 0; i <= nums.length; i++) c1 ^= i;
        for (let i = 0; i < nums.length; i++) c2 ^= nums[i];

        return c1 ^ c2;
    }
}
