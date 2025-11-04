const sumAll = function(...args) {
    // const numArray = [firstInt, secondInt];
    if (args.some(value => value < 0) || 
        !(args.every(value => Number(value) === value)) ||
        args.some(value => value % 1 !== 0)) {
        return "ERROR";
    };
    // sort arguments in ascending order
    let sortedNumArray = args.sort(
        (a, b) => a - b
    );
    let theSum = 0;
    for (let i = sortedNumArray[0]; i <= sortedNumArray[1]; i++) {
        theSum += i
    };
    return theSum
};

// Do not edit below this line
module.exports = sumAll;
