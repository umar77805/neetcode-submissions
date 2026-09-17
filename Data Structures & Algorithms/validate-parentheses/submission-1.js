class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            ')': '(',
            '}': '{',
            ']': '[',
        }

        const stack = [];

        for (const para of s) {
            if (para in pairs) {
                if (pairs[para] === stack[stack.length - 1]) {
                    stack.pop();
                } else return false;
            } else stack.push(para);
        }

        return !!!stack.length;
    }
}
