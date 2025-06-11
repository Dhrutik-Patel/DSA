// Problem Statement: Given a linked list and an integer N, the task is to delete the Nth node from the end of the linked list and print the updated linked list.

const { LinkedList } = require("./linked_list_implementation.js");

const removeNthFromEnd = (head, n) => {
    let dummy = { next: head }; // Create a dummy node to handle edge cases
    let first = dummy;
    let second = dummy;

    debugger;

    // Move first n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        if (first) {
            first = first.next;
        }
    }

    // Move both pointers until first reaches the end
    while (first) {
        first = first.next;
        second = second.next;
    }

    // Remove the nth node from the end
    second.next = second.next ? second.next.next : null;

    return dummy.next; // Return the updated head
};

const linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5);
const n = 2; // Remove the 2nd node from the end

const updatedHead = removeNthFromEnd(linkedList.head, n);
linkedList.head = updatedHead;
linkedList.print();
