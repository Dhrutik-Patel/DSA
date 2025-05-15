// Pascal's Triangle:
// (0C0)                                    - 1
// (1C0), (1C1)                            - 1, 1
// (2C0), (2C1), (2C2)                    - 1, 2, 1
// (3C0), (3C1), (3C2), (3C3)            - 1, 3, 3, 1
// (4C0), (4C1), (4C2), (4C3), (4C4)    - 1, 4, 6, 4, 1

const nCr = (n, r) => {
    if (r > n) return 0;
    if (r === 0 || r === n) return 1;

    let res = 1;
    for (let i = 0; i < r; i++) {
        res *= n - i;
        res /= i + 1;
    }
    return res;
};

// Problem Statement: This problem has 3 variations. They are stated below:

// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

const getPascalTriangleElement = (row, col) => {
    return nCr(row, col);
};

const row = 4;
const col = 2;
console.log(
    `Element at position (${row}, ${col}) in Pascal's triangle is: ${getPascalTriangleElement(
        row,
        col
    )}`
);

// Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.

// Optimal solution
const getPascalTriangleRow = (n) => {
    const row = [];
    let res = 1;
    for (let i = 0; i <= n; i++) {
        row.push(res);
        res *= n - i;
        res /= i + 1;
    }
    return row;
};

const n = 5;
console.log(`Row ${n} of Pascal's triangle is: ${getPascalTriangleRow(n).join(", ")}`);

// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.

const getPascalTriangle = (n) => {
    const triangle = [];
    for (let i = 0; i < n; i++) {
        triangle.push(getPascalTriangleRow(i));
    }
    return triangle;
};

const numRows = 5;
const pascalTriangle = getPascalTriangle(numRows);
console.log(`First ${numRows} rows of Pascal's triangle:`);
for (let i = 0; i < pascalTriangle.length; i++) {
    console.log(`Row ${i}: ${pascalTriangle[i].join(", ")}`);
}
