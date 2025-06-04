const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
};

const arr = [38, 27, 43, 3, 9, 82, 10];

console.log(insertionSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
