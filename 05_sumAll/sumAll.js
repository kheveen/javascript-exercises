const sumAll = function(start, end) {
      // Check if inputs are valid integers
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR";
    }

    // Ensure start is less than or equal to end
    if (start > end) {
        [start, end] = [end, start]; // Swap values if start is greater than end
    }

    // Calculate the sum of numbers in the range
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
