// Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns, respectively. The elements of each row are sorted in non-decreasing order. Moreover, the first element of a row is greater than the last element of the previous row (if it exists). You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.

const binarySearch = (arr, k) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === k) {
            return true;
        } else if (arr[mid] < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};

const searchInSorted2DMatrix = (matrix, target) => {
    const n = matrix.length;
    const m = matrix[0].length;
    let targetRow = -1;

    for (let i = 0; i < n; i++) {
        if (matrix[i][0] <= target && matrix[i][m - 1] >= target) {
            targetRow = i;
            break;
        }
    }

    if (targetRow === -1) {
        return false; // Target not found in any row
    }

    return binarySearch(matrix[targetRow], target);
};

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
];
console.log(searchInSorted2DMatrix(matrix, 60)); // Output: true

// Time Complexity: O(N + log M)
// Space Complexity: O(1)
