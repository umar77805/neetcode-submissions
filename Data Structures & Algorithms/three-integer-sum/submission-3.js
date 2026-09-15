class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const res = [];

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate first values
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = n - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]]);

                // Skip duplicates
                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;

                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return res;
}
}
