const fibonacci = function (n) {
    // Convert string input to number if necessary
    if (typeof n === 'string') {
        n = parseInt(n);
    }

    // Check if the input is not a positive integer
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
        return "OOPS";
    }

    // Handle special case for 0
    if (n === 0) {
        return 0;
    }

    // Calculate Fibonacci numbers for valid inputs
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
