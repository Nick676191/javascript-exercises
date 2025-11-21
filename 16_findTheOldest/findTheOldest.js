const findTheOldest = function(objArr) {
    // use of ternary operator to set `yearOfDeath` key to a new value or its current value according to wheher it is defined
    let newArr = objArr.map(obj => {
        // `hasOwnProperty` returns a boolean after checking if the object has that key in it
        obj.yearOfDeath = obj.hasOwnProperty("yearOfDeath") 
        ? obj.yearOfDeath 
        : new Date().getFullYear()
        // make sure to return the value in the array to avoid returning undefined
        return obj;
    });
    console.log(newArr);
    let sortArr = newArr.sort((a, b) => {
        // define the values being sorted
        const aLife = a.yearOfDeath - a.yearOfBirth;
        const bLife = b.yearOfDeath - b.yearOfBirth;
        return bLife - aLife;
    });
    return sortArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
