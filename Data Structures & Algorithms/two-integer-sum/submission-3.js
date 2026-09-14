class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const trackMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const currTarget = target - nums[i];
            if (trackMap.has(currTarget)) return [trackMap.get(currTarget), i];

            trackMap.set(nums[i], i);
        }

        return [-1. -1];
    }
}
