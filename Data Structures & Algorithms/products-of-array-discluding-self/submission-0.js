class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const leftProd = Array.from({length: n}).fill(1);

        let currLeftProd = 1

        for (let i = 0; i < nums.length; i++) {
            leftProd[i] = currLeftProd * (nums[i - 1] === undefined ? 1 : nums[i - 1]);
            currLeftProd = leftProd[i];
        }

        // console.log(leftProd);

        const rightProd = Array.from({length: n}).fill(1);
        let currRightProd = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            rightProd[i] = currRightProd * (nums[i + 1] === undefined ? 1 : nums[i + 1]);
            currRightProd = rightProd[i];
        }

        // console.log(rightProd);

        return leftProd.reduce((acc, curr, idx) => {
            acc.push(curr * rightProd[idx]);
            return acc;
        }, []);
    }
}
