class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.split("").filter(char => /^[a-z0-9]+$/i.test(char));

        let i = 0, j = cleaned.length - 1;

        while (i <= j) {
            if (cleaned[i].toLowerCase() !== cleaned[j].toLowerCase()) return false;
            i++;
            j--;
        }

        return true;
    }
}
