const leapYears = function(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If divisible by 4, check if its also divisible by 100 and not divisible by 400
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Divisible by 400, leap year
            } else {
                return false; // Divisible by 100 but not by 400, not a leap year
            }
        } else {
            return true; // Divisible by 4but not by 100, leap year
        }
    } else {
        return false; // Not divisible by 4, not a leap year
    }
};

// Do not edit below this line
module.exports = leapYears;
