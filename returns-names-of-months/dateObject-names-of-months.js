// create a function that takes in two dates
// and outputs an array of months inbetween the two dates, from start to finish

// input: 
// var jan = new Date(2017, 0, 1)
// var march = new Date(2017, 2, 1)

//output:
// ["January", "February", "March"]


/*
have an array of months that exist outside of the function,
0 is Jan, 1 is Feb, 2 is March etc to 11 = Dec

var jan in the above example = sun jan 01 2017 00:00:00 gmt-0800 (pacific standard time)

get the month using getMonth() to get the month as a number
compare it to the index of the month, loop through array until index matches the month and returns it
 ==> this works for getting the months for the start and end date but how about inbetween?

 for inbetween months - use above method with these if statements: 
 if startmonth === arrindex push
 if startmonth > arrindex < endmonth push 
 if endmonth === arrindex push

 instead of line 24 can have a variable equal startmonth 
 and then after every check and push, it sets the month to +1 that way
 we only need the first if statment, though we are iterating entire
 array, unless we only iterate to variable holding startMonth (startmonth
    is a different variable to firstdate, so can use original firstdate later)

or just this:  if startmonth => arrindex <= endmonth push 


 how to prevent duplicates?? could i filter it out afterwards??

-----------------------
const monthNames = [-string of month names here-]

incase the dates are put in backwards, 
let firstDate = math.min(startDate, endDate)
let lastDate = math.max(startDate, endDate)
are used to correct it (to flip them)
==> this way, it's never (2018-2020) == negative number
and always, (2020-2018) == positive number

duplicates are inivitable if you actually want to know the number of months between more than a year but to pass the rule
the difference is taken:
const year = lastDate.getFullYear() - firstDate.getFullYear();
if (year >= 1) {
    return monthNames
}

let months = firstDate.getMonth();
let monthArr = [];


*/

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function monthIntervals(date1, date2) {
    let fisrtDate = new Date(Math.min(date1, date2));
    let lastDate = new Date(Math.max(date1, date2));
    const year = lastDate.getFullYear() - fisrtDate.getFullYear();
    if (year >= 1) {
        return monthNames;
    }


}

// test if endmonth.setmonth(months2 -1) works