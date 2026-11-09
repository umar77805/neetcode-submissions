class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        // if (nums.length === 1) return 0;
        const steps = Array(nums.length).fill(Infinity);
        steps[0] = 0;

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j <= i + nums[i]; j++) {
                steps[j] = Math.min(steps[j], steps[i] + 1)
            }
        }
        console.log(steps);
        return steps[nums.length - 1]
    }
}
