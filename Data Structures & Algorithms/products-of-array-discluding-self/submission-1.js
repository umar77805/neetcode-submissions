class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // l_p = [1, 1, 2, 8] -> nums[i - 1] * l_p[i - 1]
        // r_p = [48, 24, 6, 1] -> nums[i + 1] * r_p[i + 1]
        // res = [48, 24, 12, 8] -> l_p[i] * r_p[i]

        const n = nums.length;

        const leftP = Array.from(n).fill(0);
        const rightP = Array.from(n).fill(0);

        for (let i = 0; i < n; i++) {
            leftP[i] = (nums[i - 1] === undefined ? 1 : nums[i - 1]) * (leftP[i - 1] === undefined ? 1 : leftP[i - 1]);
        }

        for (let i = n - 1; i >= 0; i--) {
            rightP[i] = (nums[i + 1] === undefined ? 1 : nums[i + 1]) * (rightP[i + 1] === undefined ? 1 : rightP[i + 1]);
        }

        return leftP.reduce((acc, curr, idx) => {
            acc.push(curr * rightP[idx]);
            return acc;
        }, []);
    }
}
