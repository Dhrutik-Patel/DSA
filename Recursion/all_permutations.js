// Problem Statement: Given an array arr of distinct integers, print all permutations of String/Array.

const allPermutations = (arr, start, answer) => {
    if (start === arr.length - 1) {
        answer.push([...arr]);
        return;
    }

    for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]];

        allPermutations(arr, start + 1, answer);

        [arr[start], arr[i]] = [arr[i], arr[start]];
    }
};

const arr = [1, 2, 3];
const answer = [];
allPermutations(arr, 0, answer);
console.log(answer);
