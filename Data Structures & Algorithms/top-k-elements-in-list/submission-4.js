class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const n = nums.length;
        const freqMap = new Map();

        for (const num of nums) {
            if (!freqMap.has(num)) freqMap.set(num, 0);

            freqMap.set(num, freqMap.get(num) + 1);
        }

        const freqSortMap = new Map(Array.from({length: n}, (_, idx) => [idx + 1, []]));


        freqMap.forEach((val, key) => freqSortMap.get(val).push(key));

        const result = [];

        const sortedFreqChars = Array.from(freqSortMap.values()).reverse().filter(ele => ele.length);

        for (const freqEle of sortedFreqChars) {
            for (const ele of freqEle) {
                result.push(ele);
                if (result.length === k) break;
            }
            if (result.length === k) break;

        }

        return result;
    }
}
