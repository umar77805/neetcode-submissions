class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const memoFreq = {};

        for (let num of nums) {
            memoFreq[num] = (memoFreq[num] || 0) + 1;
        };

        const res = Object.entries(memoFreq);
        res.sort((a, b) => b[1] - a[1]);

        return res.slice(0, k).map((ele) => parseInt(ele[0]));
    }
}
