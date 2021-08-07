
var userInput = document.querySelector("#userInput");
var check = document.querySelector(".check");
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function extractDate() {
    let dateValue = userInput.value;
    var dateArray = dateValue.split("-");
    var year = dateArray[0];
    var month = dateArray[1];
    var date = dateArray[2];
    var yr = year % 100;

    if (yr < 10) {
        yr = "0" + yr;
    }

    return [dateValue, year, month, date, yr];
}

function format(year, month, date, yr) {
    var format1 = date + month + year;
    var format2 = month + date + year;
    var format3 = year + month + date;
    var format4 = month + date + yr;

    return [format1, format2, format3, format4];
}

function checkPalindrome(format) {
    var n = format.length;
    for (var i = 0; i < n / 2; i++) {
        if (format[i] != format[n - i - 1])
            return false;
    }
    return true;
}

function dateCalulation(year, month, date) {

    var date = Number(date);
    var dateSuc = Number(date);
    var month = Number(month);
    var year = Number(year);

    var monthSuc = Number(month);
    var yearSuc = Number(year);

    var datePrec = Number(date);
    var monthPrec = Number(month)
    var yearPrec = Number(year)

    for (var i = 1; i > 0; i++) {
        dateSuc = dateSuc + 1;

        if (dateSuc > Number(monthDays[month - 1])) {
            dateSuc = 1;
            monthSuc = monthSuc + 1;
            if (monthSuc > 12) {
                monthSuc = 1;
                yearSuc = year + 1;
            }
        }
        var yearSucStr = yearSuc.toString();
        var dateSucStr = dateSuc.toString();
        var monthSucStr = monthSuc.toString();
        if (dateSucStr.length < 2) {
            dateSucStr = "0" + dateSucStr;
        }

        if (monthSucStr.length < 2) {
            monthSucStr = "0" + monthSucStr;
        }
        var yrSucStr = yearSuc.toString();
        var newF1 = dateSucStr + monthSucStr + yearSucStr;
        console.log(i + " dd/mm/yyyy: " + newF1);

        var newF2 = monthSucStr + dateSucStr + yearSucStr;
        var newF3 = yearSucStr + monthSucStr + dateSucStr;
        var newF4 = monthSucStr + dateSucStr + yrSucStr.substring(2);

        // PRECEEDING      
        if (yearPrec > 1) {
            datePrec = datePrec - 1;
            if (datePrec < 1) {
                monthPrec = monthPrec - 1;
                if (monthPrec < 1) {
                    monthPrec = 12;
                    yearPrec = yearPrec - 1;
                    if (yearPrec < 1) {
                        break;
                    }
                }
                datePrec = monthDays[monthPrec - 1];
            }

            var yearPrecStr = yearPrec.toString();
            var datePrecStr = datePrec.toString();
            var monthPrecStr = monthPrec.toString();
            if (datePrecStr.length < 2) {
                datePrecStr = "0" + datePrecStr;
            }

            if (monthPrecStr.length < 2) {
                monthPrecStr = "0" + monthPrecStr;
            }

            var newB1 = datePrecStr + monthPrecStr + yearPrecStr;
            console.log(i + " dd/mm/yyyy: " + newB1);
            console.log(" ");

            var newB2 = monthPrecStr + datePrecStr + yearPrecStr;
            var newB3 = yearPrecStr + monthPrecStr + datePrecStr;
            var newB4 = monthPrecStr + datePrecStr + yearPrecStr.substring(2);

            var newf1 = dateSucStr + "-" + monthSucStr + "-" + yearSucStr;
            var newf2 = monthSucStr + "-" + dateSucStr + "-" + yearSucStr;
            var newf3 = yearSucStr + "-" + monthSucStr + "-" + dateSucStr;
            var newf4 = monthSucStr + "-" + dateSucStr + "-" + yearSucStr.substring(2);

            var newb1 = datePrecStr + "-" + monthPrecStr + "-" + yearPrecStr;
            var newb2 = monthPrecStr + "-" + datePrecStr + "-" + yearPrecStr;
            var newb3 = yearPrecStr + "-" + monthPrecStr + "-" + datePrecStr;
            var newb4 = monthPrecStr + "-" + datePrecStr + "-" + yearPrecStr.substring(2);

            var ans = i - 2;

            if (checkPalindrome(newF1)) {
                document.getElementById('after_submit').style.visibility = "visible";
                document.getElementById('after_submit').innerHTML = "Awww!! Your birthday is not palindrome in any format.Nearest palindrome is " + newf1 + ". You missed it by " + ans + " days.";
                break;
            }
            else if (checkPalindrome(newB1)) {
                document.getElementById('after_submit').style.visibility = "visible";
                document.getElementById('after_submit').innerHTML = "Awww!! Your birthday is not palindrome in any format.Nearest palindrome is " + newb1 + ". You missed it by " + ans + " days.";
                break;
            }
            else if (checkPalindrome(newF2)) {
                document.getElementById('after_submit').style.visibility = "visible";
                document.getElementById('after_submit').innerHTML = "Awww!! Your birthday is not palindrome in any format.Nearest palindrome is " + newf2 + ". You missed it by " + ans + " days.";
                break;
            }
            else if (checkPalindrome(newB2)) {
                document.getElementById('after_submit').style.visibility = "visible";
                document.getElementById('after_submit').innerHTML = "Awww!! Your birthday is not palindrome in any format.Nearest palindrome is " + newb2 + ". You missed it by " + ans + " days.";
                break;
            }
            else if (checkPalindrome(newF3)) {
                document.getElementById('after_submit').style.visibility = "visible";
                document.getElementById('after_submit').innerHTML = "Awww!! Your birthday is not palindrome in any format.Nearest palindrome is " + newf3 + ". You missed it by " + ans + " days.";
                break;
            }
            else if (checkPalindrome(newB3)) {
                document.getElementById('after_submit').style.visibility = "visible";
                document.getElementById('after_submit').innerHTML = "Awww!! Your birthday is not palindrome in any format.Nearest palindrome is " + newb3 + ". You missed it by " + ans + " days.";
                break;
            }
            else if (checkPalindrome(newF4)) {
                document.getElementById('after_submit').style.visibility = "visible";
                document.getElementById('after_submit').innerHTML = "Awww!! Your birthday is not palindrome in any format.Nearest palindrome is " + newf4 + ". You missed it by " + ans + " days.";
                break;
            }
            else if (checkPalindrome(newB4)) {
                document.getElementById('after_submit').style.visibility = "visible";
                document.getElementById('after_submit').innerHTML = "Awww!! Your birthday is not palindrome in any format.Nearest palindrome is " + newb4 + ". You missed it by " + ans + " days.";
                break;
            }
        }
    }
}

check.addEventListener('click', () => {
    var getDate = extractDate();
    var dateValue = getDate[0];
    var year = getDate[1];
    var month = getDate[2];
    var date = getDate[3];
    var yr = getDate[4];

    var getFormat = format(year, month, date, yr);
    var format1 = getFormat[0];
    var format2 = getFormat[1];
    var format3 = getFormat[2];
    var format4 = getFormat[3];
    if (checkPalindrome(format1) || checkPalindrome(format2) || checkPalindrome(format3) || checkPalindrome(format4)) {
        console.log("Is A Palindrome")
        document.getElementById('after_submit').style.visibility = "visible";
        document.getElementById('after_submit').innerHTML = "Yay!! Your birthday " + dateValue + " is palindrome.";
    }
    else {
        dateCalulation(year, month, date);
    }
});