// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const rotateImageBy90Degree = (matrix) => {
    const n = matrix.length;

    // First, transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Then, reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
};

// Example:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(rotateImageBy90Degree(matrix));
// Output:
// [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3],
// ]
