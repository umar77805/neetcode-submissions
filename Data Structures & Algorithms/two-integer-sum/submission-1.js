class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const trackMap = new Map(nums.map((num, idx) => [num, idx]));

        for (let i = 0; i < nums.length; i++) {
            const isExist = trackMap.get(target - nums[i]);
            if (isExist !== undefined && i !== isExist) return [i, isExist]; 
        }
    }
}
