// Problem Statement: Given the heads of two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

const { LinkedList, Node } = require("./linked_list_implementation");

const addTwoNumbers = function (l1, l2) {
    const dummyNode = new Node(0);
    let current = dummyNode;
    let carry = 0;

    debugger;

    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.data : 0;
        const val2 = l2 ? l2.data : 0;

        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new Node(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyNode.next;
};

const l1 = new LinkedList();
l1.addLast(2);
l1.addLast(7);
l1.addLast(8);

const l2 = new LinkedList();
l2.addLast(5);
l2.addLast(6);
l2.addLast(4);

const result = addTwoNumbers(l1.head, l2.head);
console.log("Result Linked List:");
result.print();
