class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0, right = numbers.length - 1;

        while (left < right) {
            const res = numbers[left] + numbers[right];

            if (res === target) return [left + 1, right + 1];

            if (res < target) left++;
            else right--;
        }

        return [-1, -1];
    }
}
