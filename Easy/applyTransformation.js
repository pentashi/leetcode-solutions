/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = [];
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Apply the function to each element and push the result into the returned array
        returnedArray.push(fn(arr[i], i));
    }
    
    // Return the transformed array
    return returnedArray;
};
