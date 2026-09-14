class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // Find the pile with highest quantity of bananas
        // We take the range 1 -> max(piles)
        // We know that at least one of the number in the range will give us the solution
        // To find the minimum, we need to perform binary search

        const biggestPile = piles.reduce((acc, curr) => curr > acc ? curr : acc, 0);

        let left = 1, right = biggestPile;
        let res = 0;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const totalHours = piles.reduce((acc, curr) => Math.ceil(curr / mid) + acc, 0);
            
            if (totalHours <= h) {
                res = mid;
                right = mid - 1;
            } else left = mid + 1
        };

        return res;
    }
}
