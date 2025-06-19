// Problem Statement: The weight of N items and their corresponding values are given. We have to put these items in a knapsack of weight W such that the total value obtained is maximized.

const fractionalKnapsack = (weights, values, W) => {
    const items = values.map((value, index) => ({
        value,
        weight: weights[index],
        ratio: value / weights[index],
    }));

    // Sort items by value-to-weight ratio in descending order
    items.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0;
    let remainingWeight = W;

    for (const item of items) {
        if (remainingWeight <= 0) break;

        if (item.weight <= remainingWeight) {
            // Take the whole item
            totalValue += item.value;
            remainingWeight -= item.weight;
        } else {
            // Take the fraction of the item
            totalValue += item.ratio * remainingWeight;
            remainingWeight = 0; // Knapsack is full
        }
    }

    return totalValue;
};

const values = [60, 100, 120];
const weights = [10, 20, 30];
const W = 50;

console.log(fractionalKnapsack(weights, values, W)); // Output: 240
