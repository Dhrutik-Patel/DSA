// Problem Statement: Given a singly linked list and a node to be deleted, delete the node from the list.

const { LinkedList } = require("./linked_list_implementation");

const deleteNode = (node) => {
    if (!node || !node.next) {
        throw new Error("Node to be deleted cannot be null or the last node.");
    }

    // Copy the value from the next node to the current node
    node.value = node.next.value;

    // Bypass the next node
    node.next = node.next.next;
};

const linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5);

const nodeToDelete = linkedList.head.next; // Node with value 2
deleteNode(nodeToDelete);
console.log("Linked List after deletion:");
linkedList.printList(); // Should print: 1 -> 3 -> 4 -> 5
