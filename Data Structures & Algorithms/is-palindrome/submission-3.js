class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.split("").filter(char => /^[a-z0-9]+$/i.test(char)).map(char => char.toLowerCase());

        return cleaned.join("") === cleaned.reverse().join("");
    }
}
