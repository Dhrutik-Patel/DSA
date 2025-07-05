const aggressiveCows = (positions, cows) => {
    positions.sort((a, b) => a - b);

    const canPlaceCows = (minDistance) => {
        let count = 1; // Place the first cow at the first position
        let lastPosition = positions[0];

        for (let i = 1; i < positions.length; i++) {
            if (positions[i] - lastPosition >= minDistance) {
                count++;
                lastPosition = positions[i];
                if (count === cows) return true;
            }
        }
        return false;
    };

    let left = 0;
    let right = positions[positions.length - 1] - positions[0];
    let maxDistance = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canPlaceCows(mid)) {
            maxDistance = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return maxDistance;
};

const positions = [0, 3, 4, 7, 10, 9];
const cows = 3;
console.log(aggressiveCows(positions, cows)); // Output: 3
