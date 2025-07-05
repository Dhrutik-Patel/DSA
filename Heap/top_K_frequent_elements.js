const { MinHeap } = require("./min_heap");

const topKFrequent = (nums, k) => {
    const frequencyMap = new Map();

    // Count the frequency of each number
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Create a min-heap to keep track of the top k frequent elements
    const minHeap = new MinHeap((a, b) => a[1] - b[1]);

    for (const [num, freq] of frequencyMap.entries()) {
        minHeap.push([num, freq]);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }

    // Extract the top k frequent elements from the min-heap
    const result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.poll()[0]);
    }

    return result.reverse(); // Reverse to get the most frequent first
};

const nums = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3];
const k = 2;
console.log(topKFrequent(nums, k));
