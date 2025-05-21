// Problem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.

const mergeSortedArrays = (arr1, arr2) => {
    let i = arr1.length - 1;
    let j = 0;

    while (i >= 0 && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
            i--;
            j++;
        } else {
            break;
        }
    }

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
};

const arr1 = [1, 3, 5, 7];
const arr2 = [0, 2, 6, 8, 9];

mergeSortedArrays(arr1, arr2);

console.log("After merging:");
console.log("arr1:", arr1);
console.log("arr2:", arr2);
