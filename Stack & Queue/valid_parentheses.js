const validParentheses = (string) => {
    let stack = [];
    const mapping = { "(": ")", "{": "}", "[": "]" };

    for (let char of string) {
        if (mapping[char]) {
            stack.push(char);
        } else {
            const lastOpeningBracket = stack.pop();
            if (mapping[lastOpeningBracket] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

const string = "({[]})";

const isValid = validParentheses(string);
console.log(`The string "${string}" is ${isValid ? "valid" : "invalid"} parentheses.`);
