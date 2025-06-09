// Problem Statement: Given the head of a linked list of integers, determine the middle node of the linked list. However, if the linked list has an even number of nodes, return the second middle node.

const { LinkedList } = require("./linked_list_implementation");

function findMiddleNode(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

const linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5);
console.log(findMiddleNode(linkedList.head)); // Output: 3
