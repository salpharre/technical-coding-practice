// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
    let arr = [];
    let newStr = str.toLowerCase();
    let splitstr = newStr.split("");
    for (let i = 0; i < splitstr.length; i++) {
        if (splitstr[i] === "a" || splitstr[i] === "e" || splitstr[i] === "i" || splitstr[i] === "o" || splitstr[i] === "u" || splitstr[i] === "y") {
            arr.push(splitstr[i]);
        }
    }
    return arr.length;
};
/*
split the string into an array so can loop through each item and see
if it's a vowel, if it is a vowel push to the array
and then return the length of the array

*/