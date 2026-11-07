class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = new Map();
        const colMap = new Map();
        const subMap = new Map();

        const m = board.length
        const n = board[0].length

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                const subKey = `${Math.floor(i / 3)}+${Math.floor(j / 3)}`
                const currNum = board[i][j]
                if (!rowMap.has(i)) rowMap.set(i, [])
                if (!colMap.has(j)) colMap.set(j, [])
                if (!subMap.has(subKey)) subMap.set(subKey, [])

                if (currNum === '.') continue;

                if (rowMap.get(i).includes(currNum) || colMap.get(j).includes(currNum) || subMap.get(subKey).includes(currNum)) return false;
                rowMap.get(i).push(currNum)
                colMap.get(j).push(currNum)
                subMap.get(subKey).push(currNum)
            }
        }

        return true;
    }
}
