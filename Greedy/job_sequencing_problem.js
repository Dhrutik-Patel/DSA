// Problem Statement: You are given a set of N jobs where each job comes with a deadline and profit. The profit can only be earned upon completing the job within its deadline. Find the number of jobs done and the maximum profit that can be obtained. Each job takes a single unit of time and only one job can be performed at a time.

const jobSequencing = (jobs) => {
    // Sort jobs by profit in descending order
    jobs.sort((a, b) => b.profit - a.profit);

    const n = jobs.length;
    const maxDeadline = Math.max(...jobs.map((job) => job.deadline));
    const slots = Array(maxDeadline).fill(-1);
    let totalProfit = 0;
    let jobCount = 0;

    for (let i = 0; i < n; i++) {
        const job = jobs[i];

        if (slots[job.deadline - 1] === -1) {
            // If the slot for the job's deadline is free, assign the job
            slots[job.deadline - 1] = job.id;
            totalProfit += job.profit;
            jobCount++;
        } else {
            // Try to find a free slot before the job's deadline
            for (let j = job.deadline - 2; j >= 0; j--) {
                if (slots[j] === -1) {
                    slots[j] = job.id;
                    totalProfit += job.profit;
                    jobCount++;
                    break;
                }
            }
        }
    }

    return { jobCount, totalProfit };
};

const jobs = [
    { id: 1, deadline: 4, profit: 20 },
    { id: 2, deadline: 1, profit: 10 },
    { id: 3, deadline: 1, profit: 40 },
    { id: 4, deadline: 1, profit: 30 },
    { id: 5, deadline: 2, profit: 50 },
    { id: 6, deadline: 3, profit: 30 },
    { id: 7, deadline: 4, profit: 70 },
    { id: 8, deadline: 2, profit: 60 },
];

console.log(jobSequencing(jobs));
