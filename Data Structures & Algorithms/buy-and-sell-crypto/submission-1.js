class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        let left = 0, right = 1, profit = 0;

        if (n === 0 || n === 1) return 0;

        while ((left < right) && (right < n)) {
            const currProfit = prices[right] - prices[left];
            
            if (currProfit > profit) profit = currProfit
            else {
                if (prices[left] > prices[right]) {
                    left = right;
                }
                right++;
            }
        };

        return profit;
    }
}
