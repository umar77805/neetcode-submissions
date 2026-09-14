class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const freqMap = new Map();

        for (const char of s) {
            if (!freqMap.has(char)) freqMap.set(char, 0);
            freqMap.set(char, freqMap.get(char) + 1);
        }

        for (const char of t) {
            if (!freqMap.has(char)) return false;
            if (freqMap.get(char) === 0) return false;

            freqMap.set(char, freqMap.get(char) - 1);
        }

        return true;
    }
}
