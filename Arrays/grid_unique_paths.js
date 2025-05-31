// Problem Statement: Given a matrix m X n, count paths from left-top to the right bottom of a matrix with the constraints that from each cell you can either only move to the rightward direction or the downward direction.

// Using Recursion
function uniquePathsRecursive(i, j, r, c) {
    // Base case: If we reach the bottom-right corner, return 1
    if (i === r - 1 && j === c - 1) {
        return 1;
    }

    // If we go out of bounds, return 0
    if (i >= r || j >= c) {
        return 0;
    }

    // Move right and down recursively
    return uniquePathsRecursive(i + 1, j, r, c) + uniquePathsRecursive(i, j + 1, r, c);
}

console.log(uniquePathsRecursive(0, 0, 3, 7)); // Output: 28

// Using Dynamic Programming
function uniquePathsDP(r, c) {
    // Create a 2D array to store the number of unique paths to each cell
    const dp = Array.from({ length: r }, () => Array(c).fill(0));

    // Base case: There is one way to reach any cell in the first row or first column
    for (let i = 0; i < r; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < c; j++) {
        dp[0][j] = 1;
    }

    // Fill the dp array
    for (let i = 1; i < r; i++) {
        for (let j = 1; j < c; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // The bottom-right corner contains the total number of unique paths
    return dp[r - 1][c - 1];
}

console.log(uniquePathsDP(3, 7)); // Output: 28

// Using Combinatorial Approach

function uniquePathsCombinatorial(r, c) {
    // The number of unique paths is given by the binomial coefficient C(r + c - 2, r - 1)
    // which is (r + c - 2)! / ((r - 1)! * (c - 1)!)

    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    const totalSteps = r + c - 2;
    const downSteps = r - 1;

    return factorial(totalSteps) / (factorial(downSteps) * factorial(totalSteps - downSteps));
}
console.log(uniquePathsCombinatorial(3, 7)); // Output: 28
