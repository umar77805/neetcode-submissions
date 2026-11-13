class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const reversed = parseInt(String(x).split('').reverse().join(''))
        if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31)) return 0;
        return x < 0 ? -reversed : reversed;
    }
}
