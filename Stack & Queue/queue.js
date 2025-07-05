class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            new Error("Queue is empty");
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            new Error("Queue is empty");
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.size()); // 2
queue.clear();
