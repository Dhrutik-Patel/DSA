const { MaxHeap } = require("./max_heap");

// Most optimal solution using a max heap
const findKthLargest = (nums, k) => {
    const maxHeap = new MaxHeap();

    for (const num of nums) {
        maxHeap.push(num);
    }

    let kthLargest;
    for (let i = 0; i < k; i++) {
        kthLargest = maxHeap.poll();
    }

    return kthLargest;
};

const arr = [3, 2, 1, 5, 6, 4];
const k = 5;
console.log(findKthLargest(arr, k)); // Output: 5
