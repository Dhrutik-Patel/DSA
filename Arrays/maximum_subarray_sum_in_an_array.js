// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

const getMaxSubarraySum = (numbers) => {
    let currentSubarraySum = numbers[0];
    let maxSubarraySum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        currentSubarraySum = Math.max(currentNumber, currentSubarraySum + currentNumber);
        maxSubarraySum = Math.max(maxSubarraySum, currentSubarraySum);
    }

    return maxSubarraySum;
};

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = getMaxSubarraySum(numbers);
console.log("Maximum Subarray Sum:", result);
