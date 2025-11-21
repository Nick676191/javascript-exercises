const findTheOldest = function(objArr) {
    let sortArr = objArr.sort((a, b) => {
        const aLife = a.yearOfDeath - a.yearOfBirth;
        const bLife = b.yearOfDeath - b.yearOfBirth;
        return bLife - aLife;
    });
    return sortArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
