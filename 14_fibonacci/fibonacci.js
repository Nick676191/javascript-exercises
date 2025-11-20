// recursive example 
const fibonacci = function(num) {
    let numb = Number(num);
    if (numb < 0) {
        return "OOPS"
    } else if (numb === 0) {
        return 0
    } else if (numb === 1) {
        return 1
    } else {
        return fibonacci(numb - 1) + fibonacci(numb - 2);
    };
};

// Do not edit below this line
module.exports = fibonacci;
