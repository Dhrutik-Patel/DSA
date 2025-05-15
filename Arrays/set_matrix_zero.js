// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

const setMatrixZero = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let firstRowZero = false;
    let firstColZero = false;

    // Check if the first row has any zero
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // Check if the first column has any zero
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    // Use the first row and first column to mark zeroes
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // Mark the first column
                matrix[0][j] = 0; // Mark the first row
            }
        }
    }

    // Set the marked rows and columns to zero
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Set the first row to zero if needed
    if (firstRowZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Set the first column to zero if needed
    if (firstColZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
};

const matrix = [
    [1, 1, 0, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
];
const result = setMatrixZero(matrix);
console.log(result);
