class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // we loop throght the array
        // for each element, we setup a target which will be -(ele)
        // now we have a two sum problem
            // where we need to find the two indecies, if any, where their respective element sum = target
        // Time complexity = O(n**2)
        // Space complexity = O(n)
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
