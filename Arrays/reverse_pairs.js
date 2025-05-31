// Problem Statement: Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].

const reversePairs = function (arr) {
    const mergeAndCount = (left, right) => {
        let i = 0,
            j = 0,
            count = 0;
        const merged = [];

        // Count reverse pairs
        for (let k = 0; k < left.length; k++) {
            while (j < right.length && left[k] > 2 * right[j]) {
                j++;
            }
            count += j; // All elements in right up to j form reverse pairs with left[k]
        }

        i = 0;
        j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                merged.push(left[i]);
                i++;
            } else {
                merged.push(right[j]);
                j++;
            }
        }

        // Add remaining elements
        while (i < left.length) {
            merged.push(left[i]);
            i++;
        }
        while (j < right.length) {
            merged.push(right[j]);
            j++;
        }

        return { merged, count };
    };

    const sortAndCount = (arr) => {
        if (arr.length <= 1) return { sorted: arr, count: 0 };

        const mid = Math.floor(arr.length / 2);
        const leftResult = sortAndCount(arr.slice(0, mid));
        const rightResult = sortAndCount(arr.slice(mid));

        const mergeResult = mergeAndCount(leftResult.sorted, rightResult.sorted);

        return {
            sorted: mergeResult.merged,
            count: leftResult.count + rightResult.count + mergeResult.count,
        };
    };

    return sortAndCount(arr);
};

const arr = [4, 6, 1, 3, 5, 2];
console.log(reversePairs(arr)); // Output: 5
