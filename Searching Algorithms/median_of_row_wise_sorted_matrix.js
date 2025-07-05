// Problem Statement: Given a row-wise sorted matrix of size MXN, where M is no. of rows and N is no. of columns, find the median in the given matrix.

const getLowest = (matrix) => {
    let lowest = Infinity;
    for (let i = 0; i < matrix.length; i++) {
        lowest = Math.min(lowest, matrix[i][0]);
    }
    return lowest;
};

const getHighest = (matrix) => {
    let highest = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
        highest = Math.max(highest, matrix[i][matrix[i].length - 1]);
    }
    return highest;
};

const countLessEqual = (matrix, mid) => {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        let left = 0;
        let right = matrix[i].length - 1;

        while (left <= right) {
            const midIndex = left + Math.floor((right - left) / 2);
            if (matrix[i][midIndex] <= mid) {
                count += midIndex + 1;
                left = midIndex + 1;
            } else {
                right = midIndex - 1;
            }
        }
    }
    return count;
};

const findMedian = (matrix, N, M) => {
    const totalElements = N * M;
    const medianPosition = Math.floor((totalElements - 1) / 2);
    let left = getLowest(matrix);
    let right = getHighest(matrix);

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const smallerCount = countLessEqual(matrix, mid);

        if (smallerCount <= medianPosition) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

const matrix = [
    [1, 3, 5],
    [2, 6, 9],
    [3, 6, 9],
];
const N = matrix[0].length;
const M = matrix.length;
const median = findMedian(matrix, N, M);
console.log("Median:", median); // Output: Median: 5
