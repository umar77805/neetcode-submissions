class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length, n = matrix[0].length;
        let top = 0, bottom = m - 1;

        while (top <= bottom) {
            const mid = Math.floor((top + bottom) / 2);
            const currRow = matrix[mid];

            if ((currRow[0] <= target) && (currRow[n - 1] >= target)) { // perform binary search on row
                let left = 0, right = n - 1;

                while (left <= right) {
                    const rowMid = Math.floor((left + right) / 2);

                    if (target === currRow[rowMid]) return true;
                    if (target < currRow[rowMid]) right = rowMid - 1
                    else left = rowMid + 1;
                }

                return false;
            }

            if (target < currRow[0]) bottom = mid - 1
            else top = mid + 1
        }

        return false;
    }
}
