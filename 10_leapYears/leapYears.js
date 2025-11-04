const leapYears = function(year) {
    // leap years are divisible by 4, but not divisible by 100 (unless divisible by 400)
    if (year % 4 !== 0) return false;
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    } else {
        return true;
    };
};

// Do not edit below this line
module.exports = leapYears;
