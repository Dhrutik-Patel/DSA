// Problem Statement: Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

const { LinkedList, Node } = require("./linked_list_implementation");

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let currentA = headA;
    let currentB = headB;

    // Use two pointers to traverse both lists
    while (currentA !== currentB) {
        // If we reach the end of one list, switch to the other list
        currentA = currentA ? currentA.next : headB;
        currentB = currentB ? currentB.next : headA;
    }

    return currentA;
}

const listA = new LinkedList();
const listB = new LinkedList();
listA.addLast(1);
listA.addLast(2);
listA.addLast(8);
listA.addLast(7);
listA.addLast(6);

listB.addLast(3);
listB.addLast(4);
listB.addLast(5);
listB.head.next.next.next = listA.head.next; // Creating intersection at node with value 2
const intersectionNode = getIntersectionNode(listA.head, listB.head);
console.log(intersectionNode ? intersectionNode : "No intersection found"); // Output: 2
