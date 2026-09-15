class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // brute force is O(n**2) -> we check each future possibility for ith day
        // optimal id O(n) -> we always work with leastPriceSoFar, if we find something greater then we calculate it's potential return

        let curr = 0, least = prices[0];
        let max = 0;

        while (curr < prices.length) {
            if (prices[curr] < least) least = prices[curr];
            max = Math.max(max, prices[curr] - least)

            curr++;
        }

        return max;
    }
}
