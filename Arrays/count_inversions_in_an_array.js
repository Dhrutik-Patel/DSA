// Problem Statement: Given an array of N integers, count the inversion of the array (using merge-sort).

// What is an inversion of an array? Definition: for all i & j < size of array, if i < j then you have to find pair (A[i],A[j]) such that A[j] < A[i].

/**
 * Function to count inversions in an array using merge sort
 * @param {number[]} arr - The input array
 * @returns {number} - The count of inversions
 */

const countInversions = (arr) => {
    const mergeAndCount = (left, right) => {
        let i = 0,
            j = 0,
            count = 0;
        const merged = [];

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                merged.push(left[i]);
                i++;
            } else {
                merged.push(right[j]);
                count += left.length - i; // Count inversions
                j++;
            }
        }

        // Add remaining elements
        while (i < left.length) {
            merged.push(left[i]);
            i++;
        }
        while (j < right.length) {
            merged.push(right[j]);
            j++;
        }

        return { merged, count };
    };

    const sortAndCount = (arr) => {
        if (arr.length <= 1) return { sorted: arr, count: 0 };

        const mid = Math.floor(arr.length / 2);
        const leftResult = sortAndCount(arr.slice(0, mid));
        const rightResult = sortAndCount(arr.slice(mid));

        const mergeResult = mergeAndCount(leftResult.sorted, rightResult.sorted);

        return {
            sorted: mergeResult.merged,
            count: leftResult.count + rightResult.count + mergeResult.count,
        };
    };

    return sortAndCount(arr).count;
};

const arr = [5, 4, 3, 2, 1]; // Example array
const inversionCount = countInversions(arr);
console.log(`The number of inversions in the array is ${inversionCount}.`);
