class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;

        const targetRow = matrix[getTargetRow()];

        if (!targetRow) return false;

        let left = 0, right = n;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (targetRow[mid] === target) return true;

            if (targetRow[mid] > target) right = mid - 1
            else left = mid + 1;
        };

        return false;

        function getTargetRow() {
            let leftRow = 0, rightRow = m - 1;

            while (leftRow <= rightRow) {
                const mid = Math.floor((leftRow + rightRow) / 2);

                if (target >= matrix[mid][0] && target <= matrix[mid][n - 1]) return mid;

                if (target > matrix[mid][n - 1]) leftRow = mid + 1
                else rightRow = mid - 1
            }

            return -1;
        }
    }
}
