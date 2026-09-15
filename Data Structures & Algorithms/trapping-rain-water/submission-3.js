class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // at any idx, the max water we can store is min(maxLeft, maxRight) - height[idx]
        // at every idx we calculate maxWater we can store and at the end add them up

        const n = height.length
        const maxLeft = Array.from({length: n}).fill(0);
        const maxRight = Array.from({length: n}).fill(0);

        let maxSoFar = 0;
        for (let left = 0; left < n; left++) {
            maxLeft[left] = maxSoFar;
            maxSoFar = Math.max(maxSoFar, height[left])
        }

        maxSoFar = 0;
        for (let right = n - 1; right >= 0; right--) {
            maxRight[right] = maxSoFar;
            maxSoFar = Math.max(maxSoFar, height[right])
        }

        return height.map((curr, idx) => {
            const currMin = Math.min(maxLeft[idx], maxRight[idx]) - curr;
            return currMin < 0 ? 0 : currMin;
        }).reduce((acc, curr) => acc + curr, 0);
    }
}
