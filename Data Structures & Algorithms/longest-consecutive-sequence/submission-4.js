class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const unique = new Set(nums);
        let res = 0;

        for (const num of nums) {
            if (!unique.has(num)) continue; // we have already dealt with this num
            if (unique.has(num - 1)) continue; // not start of a series;

            let i = 0, curr = num;
            while (unique.has(curr)) {
                unique.delete(curr);
                i++;
                curr++;
            }

            res = Math.max(res, i);
        }

        return res;
    }
}
