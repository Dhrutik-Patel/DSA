// Problem Statement: There is one meeting room in a firm. You are given two arrays, start and end each of size N.For an index ‘i’, start[i] denotes the starting time of the ith meeting while end[i]  will denote the ending time of the ith meeting. Find the maximum number of meetings that can be accommodated if only one meeting can happen in the room at a  particular time. Print the order in which these meetings will be performed.

const nMeetingsInOneRoom = (start, end) => {
    const meetings = start.map((s, i) => ({ start: s, end: end[i], index: i }));

    // Sort meetings by their end time
    meetings.sort((a, b) => a.end - b.end);

    const result = [];
    let lastEndTime = -1;

    for (const meeting of meetings) {
        if (meeting.start > lastEndTime) {
            result.push(meeting.index);
            lastEndTime = meeting.end;
        }
    }

    return result;
};

const start = [1, 0, 3, 8, 5, 8];
const end = [2, 6, 4, 9, 7, 9];

console.log(nMeetingsInOneRoom(start, end)); // Output: [0, 1, 3, 4]
