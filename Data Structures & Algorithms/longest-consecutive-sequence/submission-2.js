class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const trackMap = new Map();
        const numsSet = new Set(nums);

        for (const num of numsSet.values()) {
            if (!numsSet.has(num - 1)) {
                trackMap.set(num, 0);
            }
        }

        for (const key of trackMap.keys()) {
            let currNext = key + 1;

            while (numsSet.has(currNext)) {
                trackMap.set(key, trackMap.get(key) + 1);
                currNext++;
            };
        }

        let res = 0;

        trackMap.forEach((val) => res = Math.max(res, val));

        return res + 1;
    }
}
