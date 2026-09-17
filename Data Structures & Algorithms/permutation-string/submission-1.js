class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const freqMap = new Map(); // char -> freq
        for (const char of s1) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }

        let left = 0, right = 0;
        while (right < s1.length) {
            if (freqMap.has(s2.charAt(right))) freqMap.set(s2.charAt(right), freqMap.get(s2.charAt(right)) - 1);
            right++;
        }

        right--; // we will go one step ahead in the above loop

        while (right < s2.length) {
            const currLeft = s2.charAt(left);
            const currRight = s2.charAt(right + 1);

            if (freqMap.values().find((freq) => freq !== 0)) { // the window is not valid
                if (freqMap.has(currLeft)) freqMap.set(currLeft, freqMap.get(currLeft) + 1); // we revert the decresed freq
                if (freqMap.has(currRight)) freqMap.set(currRight, freqMap.get(currRight) - 1);

                left++;
                right++;
            } else return true;
        }

        return false;
    }
}
