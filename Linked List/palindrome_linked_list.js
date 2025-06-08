// Problem Statement: Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

const { LinkedList } = require("./linked_list_implementation.js");

function isPalindrome(head) {
    // create two strings to store the values of the linked list
    let str1 = "";
    let str2 = "";
    let current = head;

    // traverse the linked list and build the strings
    while (current) {
        str1 = str1 + current.data; // build the first string in order
        str2 = current.data + str2; // build the second string in reverse order
        current = current.next;
    }

    return str1 === str2; // return true if they are equal, false otherwise
}

const linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(2);
linkedList.addLast(1);

console.log(isPalindrome(linkedList.head)); // Output: true
