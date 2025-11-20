const palindromes = function (str) {
    // just need to get rid of any special characters then reverse the string
    // the regex code `/\W/g` gets rid of any characters that aren't part of the alphabet
    let newStr = str.replace(/\W/g, '').toLowerCase();
    let strArr = newStr.split("");
    let revStr = strArr.reverse().join("");
    return newStr === revStr;
};

// Do not edit below this line
module.exports = palindromes;
