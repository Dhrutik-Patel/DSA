// Using binary search to find the kth element in two sorted arrays
const kthElement = (arr1, arr2, k) => {
    const m = arr1.length;
    const n = arr2.length;

    // Ensure arr1 is the smaller array
    if (m > n) {
        return kthElement(arr2, arr1, k);
    }

    let low = Math.max(0, k - n);
    let high = Math.min(k, m);

    while (low <= high) {
        const mid1 = Math.floor((low + high) / 2);
        const mid2 = k - mid1;

        const left1 = mid1 > 0 ? arr1[mid1 - 1] : -Infinity;
        const left2 = mid2 > 0 ? arr2[mid2 - 1] : -Infinity;
        const right1 = mid1 < m ? arr1[mid1] : Infinity;
        const right2 = mid2 < n ? arr2[mid2] : Infinity;

        if (left1 <= right2 && left2 <= right1) {
            return Math.max(left1, left2);
        } else if (left1 > right2) {
            high = mid1 - 1;
        } else {
            low = mid1 + 1;
        }
    }

    return -1;
};

const arr = [2, 6];
const arr2 = [1, 3, 4, 8, 10];
const k = 5;

console.log(kthElement(arr, arr2, k)); // Output: 4
