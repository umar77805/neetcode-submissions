class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if (nums.length === 1) return true;
        if (nums[0] === 0) return false;
        let i = nums.length - 1;

        while (i > 0) {
            let currI = i;

            for (let j = i - 1; j >= 0; j--) {
                if (nums[j] >= (i - j)) {
                    i = j;
                    break;
                }
            }

            if (i === currI) return false;
        }

        return true;
    }
}
