const { LinkedList } = require("./linked_list_implementation.js");

const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;

    while (current) {
        const nextNode = current.next; // Store the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current
        current = nextNode; // Move to the next node
    }

    return prev; // New head of the reversed list
};

const linkedList = new LinkedList();
linkedList.addFirst(1);
linkedList.addFirst(2);
linkedList.addFirst(3);
linkedList.addFirst(4);
linkedList.addFirst(5);

console.log("Original Linked List:");
linkedList.print();

const reversedHead = reverseLinkedList(linkedList.head);
console.log("Reversed Linked List:");
const reversedList = new LinkedList();
reversedList.head = reversedHead;
reversedList.print();

// Okay
