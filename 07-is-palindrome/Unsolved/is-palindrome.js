// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
let lowerCaseStr = str.toLowerCase();
let splitStr = lowerCaseStr.split("");
let reverseStr = splitStr.reverse();
let isPalindromeStr = reverseStr.join("");

if (isPalindromeStr === lowerCaseStr) {
    return true;
} else {
    return false;
}

};
/*
palindrome: naan, eye, noon

split string, reverse it, put it back together and then compare to original
if it's the same = true
if it's not = false

*/
