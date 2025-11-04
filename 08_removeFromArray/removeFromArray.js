// the rest parameter `...` in the function call allows us to accept any number of additional arguments to the function
const removeFromArray = function(arr, ...elements) {
    for (let element of elements) {
        elementIndex = arr.indexOf(element);
        // go through the loop if the element is not in the array
        if (elementIndex === -1) {
            continue;
        } else {
            arr.splice(elementIndex, 1);
        };
    };
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
