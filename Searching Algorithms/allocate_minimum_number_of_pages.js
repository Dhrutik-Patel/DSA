const allocateMinimumNumberOfPages = (books, numStudents) => {
    const isFeasible = (maxPages) => {
        let studentsRequired = 1;
        let currentSum = 0;

        for (let pages of books) {
            if (pages > maxPages) return false; // A single book exceeds maxPages
            if (currentSum + pages > maxPages) {
                studentsRequired++;
                currentSum = pages; // Start new student allocation
                if (studentsRequired > numStudents) return false;
            } else {
                currentSum += pages;
            }
        }
        return true;
    };

    const totalPages = books.reduce((sum, pages) => sum + pages, 0);
    let left = Math.max(...books); // Minimum possible maxPages
    let right = totalPages; // Maximum possible maxPages
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (isFeasible(mid)) {
            result = mid; // Found a feasible solution, try for a smaller maxPages
            right = mid - 1;
        } else {
            left = mid + 1; // Increase maxPages
        }
    }

    return result;
};

const books = [12, 34, 67, 90];
const numStudents = 2;
const result = allocateMinimumNumberOfPages(books, numStudents);
console.log(result); // Output: 113
