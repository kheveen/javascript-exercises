const findTheOldest = function (people) {
    // Use the reduce() method to find the oldest person
    return people.reduce((oldestPerson, currentPerson) => {
        // Calculate the age of the current person
        const currentAge = currentPerson.yearOfDeath ? currentPerson.yearOfDeath - currentPerson.yearOfBirth : new Date().getFullYear() - currentPerson.yearOfBirth;
        // Calculate the age of the oldest person
        const oldestAge = oldestPerson ? (oldestPerson.yearOfDeath ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth : new Date().getFullYear() - oldestPerson.yearOfBirth) : -Infinity;
        // Return the older person between the current person and the oldest person
        return currentAge > oldestAge ? currentPerson : oldestPerson;
    }, null);
};

// Do not edit below this line
module.exports = findTheOldest;
