// the rest parameter `...` in the function call allows us to accept any number of additional arguments to the function
const removeFromArray = function(arr, ...elements) {
    for (let element of elements) {
        // looping from the end of the array to not mess up indexing when elements get dropped from the array
        for (let i = arr.length - 1; i >= 0; i--) {
            if (element === arr[i]) {
                arr.splice(i, 1)
            };
        };
    };
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
