class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const freqMap = new Map();

        for (const char of s1) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }

        let left = 0;

        while (left <= s2.length - s1.length) {
            const copyMap = new Map(freqMap);
            let right = left;

            while (right < left + s1.length) {
                const char = s2[right];

                if (!copyMap.has(char)) break;

                copyMap.set(char, copyMap.get(char) - 1);

                if (copyMap.get(char) < 0) break;

                right++;
            }

            if (right === left + s1.length) {
                const remaining = [...copyMap.values()]
                    .reduce((sum, count) => sum + count, 0);

                if (remaining === 0) return true;
            }

            left++;
        }

        return false;
    }
}
