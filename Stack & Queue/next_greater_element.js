// Write a function to find the next greater element for each element in an array.
// If there is no greater element, Find circularly, If also not found, return -1.

const nextGreaterElement = (arr) => {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = [];

    for (let i = 2 * n - 1; i >= 0; i--) {
        const currentIndex = i % n;
        const currentElement = arr[currentIndex];

        // Pop elements from the stack that are less than or equal to the current element
        while (stack.length > 0 && stack[stack.length - 1] <= currentElement) {
            stack.pop();
        }

        // If the stack is not empty, the top element is the next greater element
        if (stack.length > 0) {
            result[currentIndex] = stack[stack.length - 1];
        }

        // Push the current element onto the stack
        stack.push(currentElement);
    }
};

const arr = [4, 5, 2, 10, 8];
console.log(nextGreaterElement(arr)); // Output: [5, 10, 10, -1, 10]
