// Problem Statement: Given an array of integers and a number k, find the maximum sum of a subarray of size k.

const maxSumSubarrayOfSizeK = (arr, k) => {
    if (arr.length < k) return null;

    let maxSum = 0;
    let windowSum = 0;

    // Compute sum of first k elements
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
};

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
const result = maxSumSubarrayOfSizeK(arr, k);
console.log(`The maximum sum of a subarray of size ${k} in [${arr}] is: ${result}`);
