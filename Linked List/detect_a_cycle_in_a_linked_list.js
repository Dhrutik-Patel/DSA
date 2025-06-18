// Problem Statement: Detect a cycle in a linked list

const { LinkedList } = require("./linked_list_implementation");

const detectCycle = (head) => {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle detected
};

const ll = new LinkedList();
ll.addLast(1);
ll.addLast(2);
ll.addLast(3);
ll.addLast(4);
ll.addLast(5);
ll.addLast(6);

ll.head.next.next.next.next.next = ll.head.next; // 6 -> 2
console.log(detectCycle(ll.head)); // Should return true
