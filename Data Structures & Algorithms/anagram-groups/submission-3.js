class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const trackMap = new Map(); // "sortedchars" -> index of arr
        
        return strs.reduce((acc, curr) => {
            const sorted = curr.split('').sort().join('');

            if (trackMap.has(sorted)) {
                acc[trackMap.get(sorted)].push(curr);
            } else {
                trackMap.set(sorted, trackMap.size);
                acc.push([curr])
            }

            return acc;
        }, []);
    }
}
