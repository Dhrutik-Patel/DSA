// Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.

/**
 * Optimal Approach 1:
 * 1. Initialize two variables, `sum` and `sumSq`, to 0.
 * 2. Iterate through the array and calculate the sum of all elements and the sum of squares of all elements.
 * 3. Calculate the expected sum and expected sum of squares for the first N natural numbers.
 * 4. Use the equations:
 *    - sum = A - B
 *    - sumSq = A^2 - B^2
 * 5. Rearrange the equations to find A and B:
 *    - A + B = (sumSq / sum) + B
 *    - A - B = sum
 * 6. Solve the equations to find A and B.
 * 7. Return A and B as an array.
 */
const findMissingAndRepeating = (arr) => {
    const n = arr.length;
    let sum = 0;
    let sumSq = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        sumSq += arr[i] * arr[i];
    }

    const expectedSum = (n * (n + 1)) / 2;
    const expectedSumSq = (n * (n + 1) * (2 * n + 1)) / 6;

    const diff = expectedSum - sum; // A - B
    const diffSq = expectedSumSq - sumSq; // A^2 - B^2

    const sumAB = diffSq / diff; // A + B

    const A = (diff + sumAB) / 2;
    const B = A - diff;

    return [A, B];
};

const arr = [3, 1, 2, 5, 3];
const result = findMissingAndRepeating(arr);
console.log(`The missing number is ${result[0]} and the repeating number is ${result[1]}.`);
