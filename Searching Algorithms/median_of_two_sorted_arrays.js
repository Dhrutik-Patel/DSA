// Using binary search to find the median of two sorted arrays
const findMedianSortedArrays = function (arr1, arr2) {
    const totalLength = arr1.length + arr2.length;
    const half = Math.floor(totalLength / 2);
    let isOdd = totalLength % 2 !== 0;

    let left = 0;
    let right = arr1.length - 1;

    while (true) {
        const mid1 = Math.floor((left + right) / 2);
        const mid2 = half - mid1 - 2;

        const left1 = mid1 >= 0 ? arr1[mid1] : -Infinity;
        const right1 = mid1 + 1 < arr1.length ? arr1[mid1 + 1] : Infinity;
        const left2 = mid2 >= 0 ? arr2[mid2] : -Infinity;
        const right2 = mid2 + 1 < arr2.length ? arr2[mid2 + 1] : Infinity;

        if (left1 <= right2 && left2 <= right1) {
            if (isOdd) {
                return Math.min(right1, right2);
            } else {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            }
        } else if (left1 > right2) {
            right = mid1 - 1;
        } else {
            left = mid1 + 1;
        }
    }
};

const arr1 = [7, 12, 14, 15];
const arr2 = [1, 2, 3, 4, 9, 11];

console.log(findMedianSortedArrays(arr1, arr2));
