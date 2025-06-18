// Problem Statement: We are given two arrays that represent the arrival and departure times of trains that stop at the platform. We need to find the minimum number of platforms needed at the railway station so that no train has to wait.

const findPlatform = (arrivals, departures) => {
    arrivals.sort((a, b) => a - b);
    departures.sort((a, b) => a - b);

    let platformNeeded = 0;
    let maxPlatforms = 0;
    let i = 0,
        j = 0;

    while (i < arrivals.length && j < departures.length) {
        if (arrivals[i] <= departures[j]) {
            platformNeeded++;
            i++;
        } else {
            platformNeeded--;
            j++;
        }
        maxPlatforms = Math.max(maxPlatforms, platformNeeded);
    }

    return maxPlatforms;
};

const arrivals = [1000, 1015, 1030, 1045, 1100];
const departures = [1010, 1035, 1045, 1105, 1115];

console.log(findPlatform(arrivals, departures)); // Output: 2
