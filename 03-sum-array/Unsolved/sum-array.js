// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    // loop through array, an empty count that increases by the value and return the count
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        count = count + currentNum;
    }
    return count;
};
