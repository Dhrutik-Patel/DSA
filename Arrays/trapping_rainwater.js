// Problem Statement: Given an array of non-negative integers representation elevation of ground. Your task is to find the water that can be trapped after rain.

const trap = (height) => {
    if (!height || height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
};

const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(heights)); // Expected output: 6
