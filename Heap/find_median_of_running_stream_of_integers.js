const { MaxHeap } = require("./max_heap");
const { MinHeap } = require("./min_heap");

const findMedian = (nums) => {
    const maxHeap = new MaxHeap(); // Lower half
    const minHeap = new MinHeap(); // Upper half
    const medians = [];

    for (const num of nums) {
        if (maxHeap.isEmpty() || num <= maxHeap.peek()) {
            maxHeap.push(num);
        } else {
            minHeap.push(num);
        }

        // Balance the heaps
        if (maxHeap.size() > minHeap.size() + 1) {
            minHeap.push(maxHeap.poll());
        } else if (minHeap.size() > maxHeap.size()) {
            maxHeap.push(minHeap.poll());
        }

        // Calculate median
        if (maxHeap.size() === minHeap.size()) {
            medians.push((maxHeap.peek() + minHeap.peek()) / 2);
        } else {
            medians.push(maxHeap.peek());
        }
    }

    return medians;
};

const nums = [5, 15, 1, 3, 2, 8];
const medians = findMedian(nums);
console.log("Medians of the running stream:", medians); // Output: Medians of the running stream: [ 5, 10, 5, 4, 3, 4 ]
