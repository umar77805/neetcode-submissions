class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const combine = [];
        const m = nums1.length, n = nums2.length;
        let i = 0, j = 0;

        while ((i < m) && (j < n)) {
            if (nums1[i] <= nums2[j]) {
                combine.push(nums1[i]);
                i++;
            } else {
                combine.push(nums2[j]);
                j++;
            }
        }

        for (let run = i; run < m; run++) {
            combine.push(nums1[run]);
        }
        
        for (let run = j; run < n; run++) {
            combine.push(nums2[run]);
        }
        
        if ((m + n) % 2 === 1) {
            return combine[(combine.length - 1) / 2]
        }

        return ((combine[combine.length / 2] + combine[(combine.length / 2) - 1]) / 2).toFixed(1);
    }
}
