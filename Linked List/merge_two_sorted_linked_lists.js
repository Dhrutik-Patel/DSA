// Problem Statement: Given two sorted linked lists, merge them to produce a combined sorted linked list. Return the head of the final linked list created.

const { LinkedList, Node } = require("./linked_list_implementation");

const mergeTwoSortedLinkedLists = (list1, list2) => {
    const dummyNode = new Node(0); // Dummy node to simplify merging logic
    let tail = dummyNode; // Pointer to track the end of the merged list

    let currentNode1 = list1.head; // Pointer for traversing the first list
    let currentNode2 = list2.head; // Pointer for traversing the second list

    while (currentNode1 && currentNode2) {
        if (currentNode1.data < currentNode2.data) {
            tail.next = currentNode1;
            currentNode1 = currentNode1.next;
        } else {
            tail.next = currentNode2;
            currentNode2 = currentNode2.next;
        }
        tail = tail.next; // Move the tail pointer forward
    }

    // Attach the remaining nodes from either list
    if (currentNode1) {
        tail.next = currentNode1;
    } else {
        tail.next = currentNode2;
    }

    return dummyNode.next; // Return the head of the merged list
};

// Example usage:
const linkedList1 = new LinkedList();
linkedList1.addLast(12);
linkedList1.addLast(22);
linkedList1.addLast(40);

const linkedList2 = new LinkedList();
linkedList2.addLast(9);
linkedList2.addLast(30);
linkedList2.addLast(34);

const mergedListHead = mergeTwoSortedLinkedLists(linkedList1, linkedList2);
console.log("Head of the merged linked list: ", mergedListHead);
