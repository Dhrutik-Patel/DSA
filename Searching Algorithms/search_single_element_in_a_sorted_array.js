// Problem Statement: Given an array of N integers. Every number in the array except one appears twice. Find the single number in the array.

const findSingleElement = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (
            (mid % 2 === 0 && arr[mid] === arr[mid + 1]) ||
            (mid % 2 === 1 && arr[mid] === arr[mid - 1])
        ) {
            left = mid + 1;
        } else if (
            (mid % 2 === 0 && arr[mid] === arr[mid - 1]) ||
            (mid % 2 === 1 && arr[mid] === arr[mid + 1])
        ) {
            right = mid - 1;
        } else {
            return arr[mid];
        }
    }

    return -1;
};

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5];
console.log(findSingleElement(arr)); // Output: 5
