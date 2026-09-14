class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqMap = new Map();

        for (const char of s.split('')) {
            if (!freqMap.has(char)) freqMap.set(char, 0);

            freqMap.set(char, freqMap.get(char) + 1);
        }

        for (const char of t.split('')) {
            if (!freqMap.has(char)) return false;

            freqMap.set(char, freqMap.get(char) - 1);
        }


        return !Array.from(freqMap.values()).some(value => value !== 0);
    }
}
