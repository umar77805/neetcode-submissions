class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // if (target - nums[i]) < nums[i]; then we skip the binary search

        for (let i = 0; i < numbers.length; i++) {
            const diff = target - numbers[i];

            if (diff < numbers[i]) break;

            let left = i + 1, right = numbers.length;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (numbers[mid] === diff) return [i + 1, mid + 1];

                if (diff < numbers[mid]) right = mid - 1
                else left = mid + 1;
            }
        }

        return [-1, -1];
    }
}
