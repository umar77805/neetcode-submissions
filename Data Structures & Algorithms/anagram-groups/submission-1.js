class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};
        
        for (let char of strs) {
            const keyArr = Array(26).fill(0);

            for (let c of char) {
                keyArr[c.charCodeAt(0) - "a".charCodeAt(0)]++
            };

            const key = keyArr.join("#");
            if (!result[key]) result[key] = [];

            result[key].push(char);
        };

        return Object.values(result);
    }
}
