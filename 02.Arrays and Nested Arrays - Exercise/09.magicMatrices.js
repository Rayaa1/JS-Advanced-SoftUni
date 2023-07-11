function magicMatrices(matrix) {
    let totalRowSum = matrix[0].reduce((acc, curr) => acc + curr)
    for (let row = 0; row < matrix.length; row++) {
        let sumRow = 0
        let sumCol = 0
        for (let col = 0; col < matrix.length; col++) {
            sumRow += matrix[col][row]
            sumCol += matrix[row][col]
        }
        if (totalRowSum != sumCol || totalRowSum != sumRow) {
            return false
        }
    }
    return true

}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)