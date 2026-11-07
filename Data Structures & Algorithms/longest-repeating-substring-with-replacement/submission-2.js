class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // maintain a 26 length array for chars (lookup here is constant as the length is always same)
        // at each iteration we check if least frequent chars > k (calc: (len(window) - max(chars)))
        // if yes then we shorten the array, else we update the max length of window

        if (s.length <= 1) return s.length;

        const freqArr = Array.from({length: 26}).fill(0);
        let left = 0, right = 1;
        let max = 0;

        function leastFreq(left, right) {
            return right - left + 1 - Math.max(...freqArr)
        }

        freqArr[s.charAt(left).charCodeAt(0) - 65]++;
        freqArr[s.charAt(right).charCodeAt(0) - 65]++;
        while (right < s.length) {
            
            while (leastFreq(left, right) > k) {
                freqArr[s.charAt(left).charCodeAt(0) - 65]--;
                left++;
            }

            max = Math.max(max, right - left + 1);
            right++;
            freqArr[s.charAt(right).charCodeAt(0) - 65]++;
        }

        return max;
    }
}
