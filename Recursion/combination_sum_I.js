// Problem Statement:

// Given an array of distinct integers and a target, you have to return the list of all unique combinations where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from the given array an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

const combinationSum = (index, sum, target, candidates, path, result) => {
    if (sum > target || index >= candidates.length) {
        return;
    }

    if (sum === target) {
        result.push([...path]);
        return;
    }

    // Pick: include the current index, stay on same index (unlimited picks allowed)
    path.push(candidates[index]);
    combinationSum(index, sum + candidates[index], target, candidates, path, result);
    path.pop(); // backtrack

    // Not Pick: move to next index
    combinationSum(index + 1, sum, target, candidates, path, result);
};

// Wrapper function for easier usage
const findCombinations = (candidates, target) => {
    const result = [];
    combinationSum(0, 0, target, candidates, [], result);
    return result;
};

// Example usage
const combination = [2, 3, 6, 7];
const target = 7;
console.log(findCombinations(combination, target));
