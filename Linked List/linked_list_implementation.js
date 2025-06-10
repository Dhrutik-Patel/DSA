// Linked List:
// A linked list is a data structure consisting of nodes, where each node contains data and a reference to the next node in the sequence.
//           |-------------|     |-------------|     |-------------|     |-------------|
// Head ---->| Data | Next |---->| Data | Next |---->| Data | Next |---->| Data | Next |<----Tail
//           |-------------|     |-------------|     |-------------|     |-------------|

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Only using head
    }

    // Add a new node at the end
    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Add a new node at the beginning
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Add at specific position
    addAtPosition(data, position) {
        const newNode = new Node(data);
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        for (let i = 0; i < position - 1 && current; i++) {
            current = current.next;
        }
        if (!current) throw new Error("Position out of bounds");
        newNode.next = current.next;
        current.next = newNode;
    }

    // Remove first node
    removeFirst() {
        if (!this.head) throw new Error("List is empty");
        this.head = this.head.next;
    }

    // Remove last node
    removeLast() {
        if (!this.head) throw new Error("List is empty");
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    // Remove node at position
    removeAtPosition(position) {
        if (!this.head) throw new Error("List is empty");
        if (position === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        for (let i = 0; i < position - 1 && current; i++) {
            current = current.next;
        }
        if (!current || !current.next) throw new Error("Position out of bounds");
        current.next = current.next.next;
    }

    // Get size
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Print
    print() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

module.exports = { LinkedList, Node };
