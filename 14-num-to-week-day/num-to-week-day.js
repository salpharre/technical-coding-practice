numToWeekDay();
function numToWeekDay() {
    // 1-7 corresponds to monday - sunday
    const num = [1, 2, 3, 4, 5, 6, 7, 8]
    for (let i = 0; i < num.length; i++) {
        switch(num[i]) {
            case 1:
                console.log("monday");
                break;
            case 2:
                console.log("tuesday");
                break;
            case 3:
                console.log("wed");
                break;
            case 4:
                console.log("thurs");
                break;
            case 5:
                console.log("fri");
                break;
            case 6:
                console.log("sat");
                break;
            case 7:
                console.log("sun");
                break;
            default:
                console.log("no week");
                break;
        }
    }
};

//console.log(numToWeekDay(num));
//says console.log is undefined??(but it did iterate through array successfully)
    //because it's a standard behavior of calling console.log outside of the function, 
    // but 'undefined' is gone when move array inside function and call the function instead