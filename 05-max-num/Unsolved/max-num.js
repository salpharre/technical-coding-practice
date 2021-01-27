// Write code to return the largest number in the given array

var maxNum = function (arr) {
    //initiate a varable
    let max = 0;
    //iterate through array and if number in array is larger then current number in max variable then replace the number
    //and that becomes the newest largest number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    //return largest number
    return max;

};

/*
1. do away with the loop, and just use math.max() directly on the incoming array
==> didn't work/didn't pass

2. nice try:
if (i = 0){
            array1.push(arr[i]);
        }

            if (arr[i] === array1[i]) {
                array1.push(arr[i]);
            } else if (arr[i] > array[i]){
                array2.push(arr[i]);
            }
        }

way too complicated (making it way harder then it should be):
let array1 = [];
    let array2 = [];

    array1[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if (arr[i] > array1[i]) {
                array2.push(arr[i])
            } else if (arr[i] < array1[i]) {
                array1.push(arr[i])
            }
        }
    }

*/