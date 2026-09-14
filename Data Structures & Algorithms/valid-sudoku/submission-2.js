class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMemo = new Map();
        const colMemo = new Map();
        const gridMemo = new Map();
        
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const currVal = board[i][j];
                if (currVal === '.') continue;

                const subGridKey = '' + Math.floor(i / 3) + '' + Math.floor(j / 3);

                if (!rowMemo.has(i)) rowMemo.set(i, new Set());
                if (!colMemo.has(j)) colMemo.set(j, new Set());
                if (!gridMemo.has(subGridKey)) gridMemo.set(subGridKey, new Set());

                if (rowMemo.get(i).has(currVal) || colMemo.get(j).has(currVal) || gridMemo.get(subGridKey).has(currVal)) return false;

                rowMemo.get(i).add(currVal);
                colMemo.get(j).add(currVal);
                gridMemo.get(subGridKey).add(currVal);
            }
        }

        return true;
    }
}
