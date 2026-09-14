class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (const str of strs) {
            res += str.length + '#' + str;
        }

        // console.log(`encoded string: ${res}`);
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        const splittedStr = str.split('');
        let i = 0;

        while (i < splittedStr.length) {
            let j = i;

            while (splittedStr[j] !== '#') j++;


            const char = splittedStr.slice(i, j).join('');
            // console.log(`char: ${char}`);
            const nextEncodedStr = parseInt(char);
            const subStrStart = j + 1, subStrEnd = j + nextEncodedStr + 1;

            // console.log(`subStrStart: ${subStrStart}`);
            // console.log(`nextEncodedStr: ${nextEncodedStr}`);
            // console.log(`subStrEnd: ${subStrEnd}`);
            
            res.push(splittedStr.slice(subStrStart, subStrEnd).join(''));
            i = subStrEnd;
        }

        return res;
    }
}
