const repeatString = function(str, repeats) {
    let strArr = [];
    for (let i = 0; i < repeats; i++) {
        strArr.push(str)
    }
    return strArr.join('')
};

// Do not edit below this line
module.exports = repeatString;
