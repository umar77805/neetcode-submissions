class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const trackSet = new Set();

        for (let ele of nums) {
            if (trackSet.has(ele)) return true;
            trackSet.add(ele);
        };

        return false;
    }
}
