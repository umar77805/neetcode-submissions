class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0;

        const splitted = s.split("");
        const track = new Set();

        let left = 0, right = 1;
        track.add(splitted[left]);

        let res = 1;

        while (right < s.length) {
            while (track.has(splitted[right])) {
                track.delete(splitted[left]);
                left++;
            }
            track.add(splitted[right]);

            res = Math.max(res, right - left + 1);
            right++;
        }

        return res;
    }
}
