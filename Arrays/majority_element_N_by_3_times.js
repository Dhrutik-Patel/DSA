// Problem Statement: Given an array of N integers. Find the elements that appear more than N/3 times in the array. If no such element exists, return an empty vector.

// Extended Boyer Moore’s Voting Algorithm
function findMajorityElementNBy3(arr) {
    let candidate1 = null,
        candidate2 = null;
    let count1 = 0,
        count2 = 0;

    // Phase 1: Find candidates for the majority elements
    for (let num of arr) {
        if (count1 === 0 && num !== candidate1) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0 && num !== candidate2) {
            candidate2 = num;
            count2 = 1;
        } else if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    // Phase 2: Verify the candidates
    count1 = 0;
    count2 = 0;
    for (let num of arr) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    const result = [];
    const n = arr.length;
    if (count1 > n / 3) {
        result.push(candidate1);
    }
    if (count2 > n / 3) {
        result.push(candidate2);
    }
    return result;
}

const arr = [11, 33, 33, 11, 33, 11];
console.log(findMajorityElementNBy3(arr)); // Output: [11, 33]
