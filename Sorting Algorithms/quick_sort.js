const quickSort = (arr, low, high) => {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
};

const partition = (arr, low, high) => {
    const pivot = arr[low]; // Use the first element as pivot
    let i = low + 1;
    let j = high;

    while (i <= j) {
        // Move i to the right until arr[i] > pivot
        while (i <= high && arr[i] <= pivot) i++;

        // Move j to the left until arr[j] < pivot
        while (j > low && arr[j] > pivot) j--;

        // Swap i and j if i < j
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Place the pivot in its correct position
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j; // j is the pivot's final index
};

// Example usage
const arr = [3, 6, 8, 10, 11, 2, 1];
console.log("Sorted array:", quickSort(arr, 0, arr.length - 1));
