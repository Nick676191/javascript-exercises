const findTheOldest = function(objArr) {
    objArr.map(person => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear;
        };
    });
    objArr.sort((a, b) => {
        a = a.yearOfDeath - a.yearOfBirth;
        b = b.yearOfDeath - b.yearOfBirth;
    });
    return objArr[0].name;
};

// Do not edit below this line
module.exports = findTheOldest;
