// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.

const searchInRotatedArray = (arr, k) => {
    let left = 0;
    let right = arr.length - 1;

    debugger;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === k) {
            return mid;
        } else if (arr[left] <= arr[mid]) {
            if (arr[left] <= k && k < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (arr[mid] < k && k <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};

const arr = [4, 5, 6, 7, 0, 1, 2];
const k = 0;
const result = searchInRotatedArray(arr, k);
console.log(result); // Output: 4
