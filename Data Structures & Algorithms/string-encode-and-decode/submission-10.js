class Solution {
    constructor(key = "$#129") {
        this.key = key;
    }
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) return 'null';
        return strs.reduce((acc, curr, idx) => {
            if (idx === 0) return acc;
            return acc + this.key + curr
        }, strs[0]);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === 'null') return [];
        return str.split(this.key);
    }
}
