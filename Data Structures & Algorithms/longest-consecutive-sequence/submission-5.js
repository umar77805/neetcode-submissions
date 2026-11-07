class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const trackSet = new Set(nums)
        let longest = 0;

        for (const num of trackSet.values()) {
            if (trackSet.has(num - 1)) continue

            let i = 1, currNum = num
            while (trackSet.has(currNum + 1)) {
                i++;
                currNum++;
            }

            longest = Math.max(longest, i)
        }

        return longest;
    }
}
