class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const trackMap = new Map();

        for (let char of s) {
            const isExist = trackMap.get(char);
            if (isExist !== undefined) trackMap.set(char, isExist + 1)
            else trackMap.set(char, 1);
        };

        for (let char of t) {
            const isExist = trackMap.get(char);
            if (isExist === undefined) return false;
            if (isExist === 1) trackMap.delete(char)
            else trackMap.set(char, isExist - 1);
        };

        return true;
    }
}
