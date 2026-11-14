class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let prev = 0, curr = 1;
        for (let i = 0; i < n; i++) {
            const temp = curr;
            curr += prev;
            prev = temp;
        }

        return curr;
    }
}
