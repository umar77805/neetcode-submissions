class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const answer = Array.from({length: n}).fill(1)

        let prod = 1;
        for (let i = 0 ; i < n; i++) {
            const currProd = prod
            answer[i] = prod
            prod = currProd * nums[i]
        }

        prod = 1
        for (let i = n - 1; i >= 0; i--) {
            const currProd = prod
            answer[i] *= prod
            prod = currProd * nums[i]
        }

        return answer
    }
}
