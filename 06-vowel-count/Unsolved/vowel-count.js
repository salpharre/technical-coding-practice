// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
    //empty array to push vowel to
    let arr = [];
    //change all letters to lowercase
    let newStr = str.toLowerCase();
    //split string into individual letters in an array
    let splitstr = newStr.split("");
    //iterate through letters (and spaces) and push any vowerls to array
    for (let i = 0; i < splitstr.length; i++) {
        if (splitstr[i] === "a" || splitstr[i] === "e" || splitstr[i] === "i" || splitstr[i] === "o" || splitstr[i] === "u" || splitstr[i] === "y") {
            arr.push(splitstr[i]);
        }
    }
    //return length of array with equals number of vowels in the string
    return arr.length;
};
/*
split the string into an array so can loop through each item and see
if it's a vowel, if it is a vowel push to the array
and then return the length of the array

*/