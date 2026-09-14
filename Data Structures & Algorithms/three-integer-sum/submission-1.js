class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;
        const res = [];
        const freqSet = new Set();

        for (let i = 0; i < n; i++) {
            const currTarget = -nums[i];
            const trackMap = new Map();

            for (let j = i + 1; j < n; j++) {
                const currDiff = currTarget - nums[j];
                if (trackMap.has(currDiff)) {
                    const currTriplets = [nums[i], nums[j], nums[trackMap.get(currDiff)]].sort((a, b) => b - a);
                    const freqKey = currTriplets.reduce((acc, curr) => acc + curr, '');

                    if (!freqSet.has(freqKey)) res.push(currTriplets)
                    freqSet.add(freqKey);
                } else trackMap.set(nums[j], j);
            } 
        };

        return res;
    }
}
