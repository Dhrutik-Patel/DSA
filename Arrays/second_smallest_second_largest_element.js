// Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

// Time Complexity: O(n)
// Space Complexity: O(1)
const findSecondSmallestAndLargest = (arr) => {
    if (arr.length < 2) {
        return { secondSmallest: -1, secondLargest: -1 };
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        // Update smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }

        // Update largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return {
        secondSmallest: secondSmallest === Infinity ? -1 : secondSmallest,
        secondLargest: secondLargest === -Infinity ? -1 : secondLargest,
    };
};

const arr = [38, 27, 43, 3, 9, 82, 10];

console.log(findSecondSmallestAndLargest(arr)); // Output: { secondSmallest: 9, secondLargest: 43 }
