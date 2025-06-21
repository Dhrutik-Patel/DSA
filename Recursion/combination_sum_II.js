// Problem Statement: Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.

// Note: All numbers (including target) will be positive integers. The solution set must not contain duplicate combinations.

const combinationSum2 = (index, sum, target, combinations, path, result) => {
    if (sum > target || index > combinations.length) return;

    if (sum === target) {
        result.push([...path]);
        return;
    }

    path.push(combinations[index]);
    combinationSum2(index + 1, sum + combinations[index], target, combinations, path, result);
    path.pop();

    combinationSum2(index + 1, sum, target, combinations, path, result);
};

const findCombinations = (candidates, target) => {
    const result = [];
    combinationSum2(0, 0, target, candidates, [], result);
    return result;
};

const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;

console.log(findCombinations(candidates, target));
