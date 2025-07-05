// Problem Statement: You are given a string s, partition it in such a way that every substring is a palindrome. Return all such palindromic partitions of s.

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const palindromePartitioning = (index, str, currentPartition, result) => {
    if (index === str.length) {
        result.push([...currentPartition]);
        return;
    }

    for (let i = index; i < str.length; i++) {
        const substring = str.slice(index, i + 1);
        if (isPalindrome(substring)) {
            currentPartition.push(substring);
            palindromePartitioning(i + 1, str, currentPartition, result);
            currentPartition.pop();
        }
    }
};

const str = "aabb";
const result = [];
palindromePartitioning(0, str, [], result);
console.log(result);
