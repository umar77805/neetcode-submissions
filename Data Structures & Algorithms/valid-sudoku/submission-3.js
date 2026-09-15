class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // maintain 3 Maps: (row/col/subGrid) -> newSet
        // at each step we check for duplicates
        // subgridkey = (row % 3)+(col % 3)

        const row = new Map();
        const col = new Map();
        const subGrid = new Map();


        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const subGridKey = `${Math.floor(i / 3)}+${Math.floor(j / 3)}`;
                const currVal = board[i][j];

                if (currVal === '.') continue;

                if (!row.has(i)) row.set(i, new Set());
                if (!col.has(j)) col.set(j, new Set());
                if (!subGrid.has(subGridKey)) subGrid.set(subGridKey, new Set());

                if (row.get(i).has(currVal)) return false;
                if (col.get(j).has(currVal)) return false;
                if (subGrid.get(subGridKey).has(currVal)) return false;

                row.get(i).add(currVal);
                col.get(j).add(currVal);
                subGrid.get(subGridKey).add(currVal);
            }
        }

        return true;
    }
}
