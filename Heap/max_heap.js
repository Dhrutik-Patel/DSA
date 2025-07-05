class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }

    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);

        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    poll() {
        if (this.isEmpty()) {
            return null;
        }

        const maxValue = this.heap[0];
        const lastValue = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = lastValue;
            this.heapifyDown();
        }

        return maxValue;
    }

    heapifyDown() {
        let currentIndex = 0;

        while (this.getLeftChildIndex(currentIndex) < this.size()) {
            const leftChildIndex = this.getLeftChildIndex(currentIndex);
            const rightChildIndex = this.getRightChildIndex(currentIndex);

            const leftChild = this.heap[leftChildIndex];
            const rightChild =
                rightChildIndex < this.size() ? this.heap[rightChildIndex] : undefined;

            let biggestChildIndex = leftChildIndex;

            if (rightChild !== undefined && rightChild > leftChild) {
                biggestChildIndex = rightChildIndex;
            }

            if (this.heap[currentIndex] < this.heap[biggestChildIndex]) {
                this.swap(currentIndex, biggestChildIndex);
                currentIndex = biggestChildIndex;
            } else {
                break;
            }
        }
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.heap[0];
    }
}

const maxHeap = new MaxHeap();
maxHeap.push(25);
maxHeap.push(5);
maxHeap.push(40);
maxHeap.push(70);
maxHeap.push(90);
maxHeap.push(44);

// console.log(maxHeap.heap); // Output: [ 90, 70, 44, 5, 40, 25 ]

// console.log(maxHeap.poll()); // Output: 90
// console.log(maxHeap.heap); // Output: [ 70, 40, 44, 5, 25 ]

module.exports = { MaxHeap };
