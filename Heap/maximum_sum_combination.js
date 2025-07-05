const { MaxHeap } = require("./max_heap");

const maximumSumCombination = (arr1, arr2, k) => {
    const maxHeap = new MaxHeap();
    const n = arr1.length;
    const visited = new Set();

    // Sort both arrays in descending order
    arr1.sort((a, b) => b - a);
    arr2.sort((a, b) => b - a);

    // Push the initial combination into the heap
    maxHeap.push([arr1[0] + arr2[0], 0, 0]);
    visited.add(`${0},${0}`);

    const result = [];

    while (k-- > 0 && !maxHeap.isEmpty()) {
        const [sum, i, j] = maxHeap.poll();
        result.push(sum);

        // Push the next combinations into the heap
        if (i + 1 < n && !visited.has(`${i + 1},${j}`)) {
            maxHeap.push([arr1[i + 1] + arr2[j], i + 1, j]);
            visited.add(`${i + 1},${j}`);
        }
        if (j + 1 < n && !visited.has(`${i},${j + 1}`)) {
            maxHeap.push([arr1[i] + arr2[j + 1], i, j + 1]);
            visited.add(`${i},${j + 1}`);
        }
    }

    return result;
};

const arr1 = [2, 5, 1, 3, 4];
const arr2 = [3, 6, 2, 8, 7];
const k = 5;
const result = maximumSumCombination(arr1, arr2, k);
console.log(result);
