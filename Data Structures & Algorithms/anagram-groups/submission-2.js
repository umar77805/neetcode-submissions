class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const trackMap = new Map();
        
        for (const word of strs) {
            const newFreqMap = this.getNewCharFreq();
            for (const char of word.split('')) {
                newFreqMap.set(char, newFreqMap.get(char) + 1);
            }
            
            const freqKey = Array.from(newFreqMap.entries()).reduce((acc, curr) => acc + curr.reduce((currCharAcc, currCharCurr) => currCharAcc + currCharCurr, ''), '');

            if (!trackMap.has(freqKey)) trackMap.set(freqKey, []);

            trackMap.get(freqKey).push(word);
        }

        return Array.from(trackMap.values()).filter(values => values.length);
    }

    getNewCharFreq() {
        return new Map(Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index)).map(char => [char, 0]));
    }
}
