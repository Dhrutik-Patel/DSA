// Problem Statement: Given an array of N + 1 size, where each element is between 1 and N. Assuming there is only one duplicate number, your task is to find the duplicate number.

const findDuplicate = (arr) => {
    let slow = arr[0];
    let fast = arr[0];

    // Phase 1: Finding the intersection point
    do {
        slow = arr[slow]; // Move slow pointer by one step
        fast = arr[arr[fast]]; // Move fast pointer by two steps
    } while (slow !== fast);

    // Phase 2: Finding the entrance to the cycle
    slow = arr[0];
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }

    return slow; // The duplicate number
};

const arr = [1, 3, 4, 2, 2];
console.log(findDuplicate(arr)); // Output: 2
