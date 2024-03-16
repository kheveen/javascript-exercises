const palindromes = function (str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    //Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
