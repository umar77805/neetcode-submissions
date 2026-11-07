class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const left = Array.from({length: n}).fill(1)
        const right = Array.from({length: n}).fill(1)

        let prod = 1;
        for (let i = 0 ; i < n; i++) {
            const currProd = prod
            left[i] = prod
            prod = currProd * nums[i]
        }

        prod = 1
        for (let i = n - 1; i >= 0; i--) {
            const currProd = prod
            right[i] = prod
            prod = currProd * nums[i]
        }

        return left.reduce((acc, curr, idx) => {
            acc.push(curr * right[idx])
            return acc;
        }, [])
    }
}
