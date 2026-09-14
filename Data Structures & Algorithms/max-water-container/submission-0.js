class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length;
        let left = 0, right = n - 1;
        let res = 0;

        while (left < right) {
            const length = right - left;
            const height = Math.min(heights[left], heights[right]);
            const currWater = length * height;
            
            res = Math.max(res, currWater);

            if (heights[left] > heights[right]) right--
            else left++;
        };

        return res;
    }
}
