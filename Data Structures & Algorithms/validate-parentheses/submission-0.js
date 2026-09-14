class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairMap = new Map([
            ['(', ')'],
            ['{', '}'],
            ['[', ']']
        ]);

        const stack = [];

        for (const para of s.split('')) {
            if (!pairMap.has(para))  {
                if (pairMap.get(stack.at(-1)) !== para) return false
                else stack.pop();
            } else stack.push(para);
        }

        return !stack.length;
    }
}
