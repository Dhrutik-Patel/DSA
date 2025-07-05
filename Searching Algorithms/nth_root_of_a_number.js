// Problem Statement: Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M. If the 'nth root is not an integer, return -1.

const nthRoot = (N, M) => {
    if (N <= 0 || M < 0) {
        return -1; // Invalid input
    }

    let low = 0;
    let high = M;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const power = Math.pow(mid, N);

        if (power === M) {
            return mid;
        }
        if (power < M) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
};
const N = 3;
const M = 27;

console.log(nthRoot(N, M)); // Output: 3, since 3^3 = 27
