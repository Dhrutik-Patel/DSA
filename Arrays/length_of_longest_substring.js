// Problem Statement: Given a String, find the length of longest substring without any repeating character.

const lengthOfLongestSubstring = (string) => {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < string.length; right++) {
        while (charSet.has(string[right])) {
            charSet.delete(string[left]);
            left++;
        }
        charSet.add(string[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

const string = "abcabcbb";
const result = lengthOfLongestSubstring(string);
console.log(
    `The length of the longest substring without repeating characters in "${string}" is: ${result}`
);
