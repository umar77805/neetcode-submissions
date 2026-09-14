class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // We keep a note of the highest bar (freq doesn't matter)
        // We do an initial loop from left to highest bar position (again, the frequency doesn't matter)
            // We keep track of the water we can store untill we reach the highest bar
        // We do the same from right
        // If left !== right, this means that teher are multiple highest bars
            // so we will do a third loop from left most hight till right most highest and trap the rain water

        let n = height.length, highestBar = 0;
        let left = 0, right = n - 1;
        let res = 0;

        // positioning the pointers properly to avoid edge cases
        while (height[left] === 0) left++;
        while (height[right] === 0) right--;

        // setting the highest bar
        for (let i = 0; i < n; i++) highestBar = Math.max(highestBar, height[i]);

        // edge cases
        if (n === 1 || highestBar === 0) return 0;

        // loop from left to left most highest bar
        while (height[left] < highestBar) {
            let currRight = left + 1, blockers = 0;
            
            while (height[currRight] < height[left]) {
                blockers += height[currRight];
                currRight++;
            };

            // max water that can be trappeed
            const width = currRight - left - 1;
            const wallHeight = Math.min(height[left], height[currRight]);
            let trappedWater = width * wallHeight;

            // remove blockers
            trappedWater -= blockers;

            res += trappedWater;
            left = currRight;
        };

        // loop from right to right most highest bar
        while (height[right] < highestBar) {
            let currLeft = right - 1, blockers = 0;
            
            while (height[currLeft] < height[right]) {
                blockers += height[currLeft];
                currLeft--;
            };

            // max water that can be trappeed
            const width = right - currLeft - 1;
            const wallHeight = Math.min(height[right], height[currLeft]);
            let trappedWater = width * wallHeight;

            // remove blockers
            trappedWater -= blockers;

            res += trappedWater;
            right = currLeft;
        };

        // loop from left most highest bar till right most highest bar
        if (left !== right) {
            let blockers = 0;
            for (let i = left + 1; i < right; i++) blockers += height[i];

            const width = right - left - 1;
            const trappedWater = (width * height[right]) - blockers;

            res += trappedWater;
        }

        return res;
    }
}
