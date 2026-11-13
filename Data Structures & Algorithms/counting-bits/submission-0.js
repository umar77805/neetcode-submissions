class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        return Array.from({length: n + 1}, (_, idx) => idx.toString(2).split('').reduce((acc, curr) => curr === '1' ? acc + 1 : acc, 0));
    }
}
