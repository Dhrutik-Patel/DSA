// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

const findContentChildren = function (g, s) {
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);

    let contentChildren = 0;
    let i = 0,
        j = 0;

    while (i < g.length && j < s.length) {
        if (g[i] > s[j]) {
            i++;
        } else {
            contentChildren++;
            i++;
            j++;
        }
    }

    return contentChildren;
};

const g = [1, 5, 3, 3, 4];
const s = [4, 2, 1, 2, 1, 3];
console.log(findContentChildren(g, s));
