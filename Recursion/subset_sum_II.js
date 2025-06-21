// Problem Statement: Given an array of integers that may contain duplicates the task is to return all possible subsets. Return only unique subsets and they can be in any order.

const subsetSumII = (index, arr, current, result) => {
    result.push([...current]); // Add the current subset to the result

    for (let i = index; i < arr.length; i++) {
        // Skip duplicates
        if (i > index && arr[i] === arr[i - 1]) continue;

        current.push(arr[i]); // Include the current element
        subsetSumII(i + 1, arr, current, result); // Recur for the next elements
        current.pop(); // Backtrack to explore subsets without the current element
    }

    return result; // Return the result containing all unique subsets
};

const arr = [1, 2];
console.log("Subsets: ", subsetSumII(0, arr, [], []));
