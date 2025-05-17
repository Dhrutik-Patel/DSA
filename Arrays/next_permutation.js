// Problem Statement: Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).

const getNextPermutation = (arr) => {
    const n = arr.length;
    let i = n - 2;

    // Step 1: Find the first decreasing element from the end
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    // If no such element is found, reverse the array
    if (i < 0) {
        return arr.reverse();
    }

    // Step 2: Find the next greater element to swap with
    let j = n - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    // Step 3: Swap the elements
    [arr[i], arr[j]] = [arr[j], arr[i]];

    // Step 4: Reverse the elements after index i
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
};

const arr = [2, 1, 5, 4, 3, 0, 0];
console.log(getNextPermutation(arr));
