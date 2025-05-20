// Problem Statement: Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.

const mergeOverlappingIntervals = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];

        // Check if there is an overlap
        if (currentInterval[1] >= nextInterval[0]) {
            // Merge the intervals
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            // No overlap, push the current interval to merged and move to the next
            merged.push(currentInterval);
            currentInterval = nextInterval;
        }
    }

    // Add the last interval
    merged.push(currentInterval);

    return merged;
};

const intervals = [
    [1, 3],
    [2, 6],
    [8, 9],
    [9, 11],
    [8, 10],
    [2, 4],
    [15, 18],
    [17, 20],
];

const mergedIntervals = mergeOverlappingIntervals(intervals);
console.log(mergedIntervals); // Output: [[1, 6], [8, 10], [15, 20]]
