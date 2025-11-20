// // recursive example 
// const fibonacci = function(num) {
//     let numb = Number(num);
//     if (numb < 0) {
//         return "OOPS";
//     } else if (numb === 0) {
//         return 0;
//     } else if (numb === 1) {
//         return 1;
//     } else {
//         return fibonacci(numb - 1) + fibonacci(numb - 2);
//     };
// };

// iterative example
const fibonacci = function(num) {
    let numb = Number(num);
    if (numb < 0) {
        return "OOPS";
    } else if (numb === 0) {
        return 0;
    } else if (numb === 1) {
        return 1;
    } else {
        let iterOne = 0;
        let iterTwo = 1;
        let fibArr = [];
        for (let i = 1; i < numb; i++) {
            fibArr.push(iterOne + iterTwo)
            iterOne = iterTwo;
            // grab the last value rather than create an array with the last value
            iterTwo = fibArr.slice(-1)[0];
        };
        return fibArr.slice(-1)[0];
    };
};

// Do not edit below this line
module.exports = fibonacci;
