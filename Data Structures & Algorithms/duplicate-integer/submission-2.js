class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const trackSet = new Set();

        for (const num of nums) {
            if (trackSet.has(num)) return true;
            trackSet.add(num);
        }

        return false;
    }
}
