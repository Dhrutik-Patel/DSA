const { LinkedList } = require("./linked_list_implementation.js");

// Reverse a linked list and return the new head
const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

// Get the k-th node from the current node
const getKthNode = (node, k) => {
    while (node && k > 1) {
        node = node.next;
        k--;
    }
    return node;
};

// Reverse nodes in groups of k
const reverseInGroups = (head, k) => {
    debugger;
    if (!head || k <= 1) return head;

    let dummy = { next: head }; // temporary dummy node
    let prevGroupEnd = dummy;
    let current = head;

    while (current) {
        const kthNode = getKthNode(current, k);
        if (!kthNode) break; // not enough nodes to reverse

        const nextGroupStart = kthNode.next;
        kthNode.next = null; // detach the k-group

        // Reverse current group
        const reversedHead = reverseLinkedList(current);

        // Connect previous group to reversed
        prevGroupEnd.next = reversedHead;

        // Move to the end of reversed group (which is 'current' now)
        current.next = nextGroupStart;

        // Update pointers for next group
        prevGroupEnd = current;
        current = nextGroupStart;
    }

    return dummy.next;
};

// Test Code
const ll = new LinkedList();
for (let i = 1; i <= 10; i++) {
    ll.addLast(i);
}

const k = 3;
const reversedHead = reverseInGroups(ll.head, k);
ll.head = reversedHead;

ll.print(); // Output: 3 -> 2 -> 1 -> 6 -> 5 -> 4 -> 9 -> 8 -> 7 -> 10
