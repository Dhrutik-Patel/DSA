class MinHeap {
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

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.getParentIndex(index)].value > this.heap[index].value) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    poll() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (this.getLeftChildIndex(index) < length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            if (
                rightChildIndex < length &&
                this.heap[rightChildIndex].value < this.heap[smallerChildIndex].value
            ) {
                smallerChildIndex = rightChildIndex;
            }

            if (this.heap[index].value <= this.heap[smallerChildIndex].value) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.push(25);
minHeap.push(5);
minHeap.push(40);
minHeap.push(70);
minHeap.push(90);
minHeap.push(44);

// console.log(minHeap.heap); // Output: [5, 25, 40, 70, 90, 44]

// console.log(minHeap.poll()); // Output: 5
// console.log(minHeap.heap); // Output: [25, 44, 40, 70, 90]

module.exports = { MinHeap };
