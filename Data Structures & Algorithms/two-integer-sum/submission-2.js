class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const trackMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const currDiff = target - nums[i];
            
            if (trackMap.has(currDiff)) return [trackMap.get(currDiff), i];
            trackMap.set(nums[i], i); 
        }

        return [-1, -1];
    }
}
