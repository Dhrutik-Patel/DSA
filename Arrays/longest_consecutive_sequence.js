// Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

// Using a set to find the longest consecutive sequence in an array.
// Time Complexity: O(N), where N is the number of elements in the array.
// Space Complexity: O(N), for storing the elements in a set.
const longestConsecutiveSequence = (arr) => {
    const numSet = new Set(arr);
    let longestStreak = 0;

    for (const num of arr) {
        // Only check for the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count the length of the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

const arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSequence(arr)); // Output: 4 (The longest consecutive sequence is [1, 2, 3, 4])
