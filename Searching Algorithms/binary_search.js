// Binary Search Algorithm

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 1;
const result = binarySearch(arr, target);
console.log(`Element found at index: ${result}`);
