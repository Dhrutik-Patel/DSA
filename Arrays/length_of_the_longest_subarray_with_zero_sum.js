// Problem Statement: Given an array containing both positive and negative integers, we have to find the length of the longest subarray with the sum of all elements equal to zero.

// Using a HashMap to store the cumulative sum and its first occurrence index
const lengthOfLongestSubarrayWithZeroSum = (arr) => {
    const sumIndexMap = new Map();
    let maxLength = 0;
    let cumulativeSum = 0;

    for (let i = 0; i < arr.length; i++) {
        cumulativeSum += arr[i];

        // Check if cumulative sum is zero
        if (cumulativeSum === 0) {
            maxLength = i + 1; // Update maxLength to current index + 1
        }

        // If cumulative sum has been seen before, calculate the length of the subarray
        if (sumIndexMap.has(cumulativeSum)) {
            const previousIndex = sumIndexMap.get(cumulativeSum);
            maxLength = Math.max(maxLength, i - previousIndex);
        } else {
            // Store the first occurrence of the cumulative sum
            sumIndexMap.set(cumulativeSum, i);
        }
    }

    return maxLength;
};

const arr = [9, -3, 3, -1, 6, -5];

const length = lengthOfLongestSubarrayWithZeroSum(arr);
console.log(`Length of the longest subarray with zero sum: ${length}`);
