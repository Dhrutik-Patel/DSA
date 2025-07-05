const { MinHeap } = require("./min_heap");

const mergeKSortedArrays = (arrays) => {
    const minHeap = new MinHeap();
    const mergedArray = [];

    // Add the first element of each array to the heap
    arrays.forEach((array, index) => {
        if (array.length > 0) {
            minHeap.push({ value: array[0], arrayIndex: index, elementIndex: 0 });
        }
    });

    // Extract min and add the next element from the same array
    while (!minHeap.isEmpty()) {
        const { value, arrayIndex, elementIndex } = minHeap.poll();
        mergedArray.push(value);

        if (elementIndex + 1 < arrays[arrayIndex].length) {
            minHeap.push({
                value: arrays[arrayIndex][elementIndex + 1],
                arrayIndex,
                elementIndex: elementIndex + 1,
            });
        }
    }

    return mergedArray;
};

const arrays = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
];
console.log(mergeKSortedArrays(arrays)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
