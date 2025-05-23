// Problem Statement: This function will identify the leaders in an array, where a leader is defined as an element that is greater than all the elements to its right.

const findLeaders = (arr) => {
    const leaders = [];
    let maxFromRight = arr[arr.length - 1];
    leaders.push(maxFromRight);

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            maxFromRight = arr[i];
            leaders.push(maxFromRight);
        }
    }

    return leaders.reverse();
};

const arr = [16, 17, 4, 3, 5, 2];

console.log(findLeaders(arr)); // Output: [17, 5, 2]
