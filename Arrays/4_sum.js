// Problem Statement: Given an array of N integers, your task is to find unique quads that add up to give a target value. In short, you need to return an array of all the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] such that their sum is equal to a given target.

function fourSum(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array to handle duplicates and use two-pointer technique

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first number

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicates for the second number

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates for the third number
                    while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates for the fourth number
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
console.log(fourSum(nums, target)); // Output: [[-2, -1, 0, 1], [-2, 0, 0, 2], [-1, 0, 0, 1]]
