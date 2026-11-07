class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const n = s.length;
        if (n === 0) return 0;
        if (n === 1) return 1;

        let left = 0, right = 1;
        const trackSet = new Set(s[0])

        let res = 1;

        while (right < n) {
            while (trackSet.has(s.charAt(right))) {
                trackSet.delete(s.charAt(left));
                left++;
            }

            trackSet.add(s.charAt(right));
            res = Math.max(res, right - left + 1);
            right++;
        }

        return res;
    }
}
