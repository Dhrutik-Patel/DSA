// Moore's Voting Algorithm

// Problem Statement: This function will find the majority element in an array, where a majority element is defined as an element that appears more than n/2 times in the array. If no such element exists, it returns -1.

const findMajorityElement = (arr) => {
    let candidate = null;
    let count = 0;

    // Phase 1: Find a candidate for the majority element
    for (let num of arr) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Phase 2: Verify if the candidate is indeed the majority element
    count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    return count > arr.length / 2 ? candidate : -1;
};

const array = [2, 3, 3, 4, 2, 2, 4, 4, 2, 4, 4, 2, 2];

console.log(findMajorityElement(array)); // Output: 2
