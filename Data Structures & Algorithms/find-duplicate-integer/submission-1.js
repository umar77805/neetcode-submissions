class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let i = 0;
        while (nums[i] !== 0) {
            const temp = nums[i];
            nums[i] = 0;
            i = temp;
        }

        return i;
    }
}
