class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // if currSum is -ve, we move to next positive
        let sum = -Infinity, currSum = 0;
        let point = 0;

        while (point < nums.length) {
            currSum += nums[point];
            sum = Math.max(currSum, sum);

            if (currSum < 0) {
                currSum = 0;
            }

            point++;
        }

        return sum;
    }
}
