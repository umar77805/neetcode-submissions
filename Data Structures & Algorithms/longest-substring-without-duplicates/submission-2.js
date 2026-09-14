class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const trackSet = new Set();
        const strArr = s.split('');
        let l = 0, res = 0;

        for (let r = 0; r < s.length; r++) {
            while (trackSet.has(strArr[r])) {
                trackSet.delete(strArr[l]);
                l++;   
            };

            trackSet.add(strArr[r]);
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
