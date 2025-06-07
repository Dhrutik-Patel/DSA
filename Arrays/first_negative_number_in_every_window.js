// Problem Statement: Given an array of integers and a number k, print the first negative number in every window of size k. If a window does not contain a negative number, print 0 for that window.

// Using Sliding Window Technique
// Time Complexity: O(n)
// Space Complexity: O(k)
const firstNegativeInWindow = (arr, k) => {
    const result = [];
    const queue = [];

    let left = 0;
    for (let right = 0; right < arr.length; right++) {
        // If the current element is negative, add it to the queue
        if (arr[right] < 0) {
            queue.push(arr[right]);
        }

        // If we have reached the size of the window
        if (right >= k - 1) {
            // If the queue is not empty, the first negative number is at the front
            if (queue.length > 0) {
                result.push(queue[0]);
            } else {
                result.push(0); // No negative number in this window
            }

            // If the element going out of the window is negative, remove it from the queue
            if (arr[left] < 0) {
                queue.shift();
            }
            left++; // Move the left pointer to slide the window
        }
    }

    return result;
};

const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;
const result = firstNegativeInWindow(arr, k);
console.log(`The first negative number in every window of size ${k} is: ${result}`);
