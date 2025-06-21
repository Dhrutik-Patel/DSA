// Problem Statement: Given an array print all the sum of the subset generated from it, in the increasing order.

const subsetSum = (index, sum, arr, N, sumSubset) => {
    if (index === N) {
        sumSubset.push(sum);
        return;
    }

    // Include the current element
    subsetSum(index + 1, sum + arr[index], arr, N, sumSubset);

    // Exclude the current element
    subsetSum(index + 1, sum, arr, N, sumSubset);
};

const arr = [1, 2, 3];
const N = arr.length;
const sumSubset = [];
subsetSum(0, 0, arr, N, sumSubset);
sumSubset.sort((a, b) => a - b);
console.log("All possible subset sums in increasing order:");
console.log(sumSubset.join(" "));
