// Problem Statement: Given a double x and integer n, calculate x raised to power n. Basically Implement pow(x, n).
// Time Complexity: O(log n)

const pow = function (x, n) {
    if (n === 0) return 1; // x^0 = 1

    let result = 1;
    let newN = n;

    if (n < 0) {
        newN = -n; // If n is negative, we will calculate the positive power and then take the reciprocal
    }

    while (newN > 0) {
        if (newN % 2 === 1) {
            result = result * x; // If n is odd, multiply the result by x
            newN--; // Decrease n by 1
        } else {
            x = x * x; // If n is even, square x
            newN /= 2; // Halve n
        }
    }

    if (n < 0) {
        return 1 / result; // If n was negative, return the reciprocal
    } else {
        return result; // Otherwise, return the result
    }
};

const x = 2.0;
const n = 10;
console.log(pow(x, n)); // Output: 1024.00000
