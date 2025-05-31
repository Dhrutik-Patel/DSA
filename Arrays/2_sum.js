// Problem Statement: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Using a Hash Map for Efficient Lookup
const twoSum = (nums, target) => {
    const numToIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        numToIndex.set(nums[i], i);
    }

    return []; // Return an empty array if no solution is found
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // Output: [0, 1]

// Using Two-Pointer Technique (for sorted arrays)
const twoSumSorted = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return []; // Return an empty array if no solution is found
};
const sortedNums = [2, 7, 11, 15];
const sortedTarget = 9;
console.log(twoSumSorted(sortedNums, sortedTarget)); // Output: [0, 1]
