class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let k = 0; k < 9; k += 3) {
    let boxSize = 0;
    const boxSet = new Set<string>()
    for (let j = 0; j < 9; j++) {
        for (let i = k; i < k + 3; i++) {
            if (boxSize === 9) {
                boxSet.clear();
                boxSize = 0;
            }
            if (boxSet.has(board[j]?.[i]!)) {
                return false
            }
            else {
                if (board[j]?.[i]! !== '.')
                    boxSet.add(board[j]?.[i]!)
                boxSize++
            }
        }
    }
}


for (let j = 0; j < 9; j++) {
    const rowSet = new Set<string>()
    for (let i = 0; i < 9; i++) {
        if (rowSet.has(board[j]?.[i]!)) {
            return false
        }
        else {
            if (board[j]?.[i]! !== '.')
                rowSet.add(board[j]?.[i]!)
        }
    }
}

for (let j = 0; j < 9; j++) {
    const rowSet = new Set<string>()
    for (let i = 0; i < 9; i++) {
        if (rowSet.has(board[i]?.[j]!)) {
            return false
        }
        else {
            if (board[i]?.[j]! !== '.')
                rowSet.add(board[i]?.[j]!)
        }
    }
}
return true
    }
}
