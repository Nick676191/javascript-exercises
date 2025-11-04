const reverseString = function(str) {
    let reverseStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        let lastLetter = str[i];
        reverseStr = reverseStr + lastLetter;
    };
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
