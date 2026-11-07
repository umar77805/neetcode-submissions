class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let low = 0, high = 0;
        let max = 0;

        while (high < prices.length) {
            if (prices[high] < prices[low]) {
                low = high
            }

            max = Math.max(max, prices[high] - prices[low])
            high++;
        }

        return max;
    }
}
