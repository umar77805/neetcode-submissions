class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const splittedStr = s.trim().split('').filter((str) => /^[a-z0-9]+$/i.test(str)).map((str) => str.toLowerCase());

        let i = 0, j = splittedStr.length - 1;

        while (i <= j) {
            if (splittedStr[i] !== splittedStr[j]) return false
            i++;
            j--;
        };

        return true;
    }
}
