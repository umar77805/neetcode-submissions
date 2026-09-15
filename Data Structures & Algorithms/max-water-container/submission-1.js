class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length;
        if (n <= 1) return 0;

        let left = 0, right = n - 1;
        let max = 0;
        
        while (left < right) {
            const maxWater = Math.min(heights[left], heights[right]) * (right - left);
            max = Math.max(max, maxWater);

            if (heights[left] < heights[right]) left++
            else right--;
        }

        return max;
    }
}
