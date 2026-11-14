class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let prev = 0, curr = 0;
        for (let i = 2; i <= cost.length; i++) {
            const temp = curr;
            curr = Math.min(prev + cost[i - 2], curr + cost[i - 1]);
            prev = temp;
        }

        return curr;
    }
}
