console.log("working");

var userInput = document.querySelector("#userInput");

var check = document.querySelector(".check");

function extractDate() {
    let dateValue = userInput.value;
    console.log(dateValue);
    console.log("clicked");
    var dateArray = dateValue.split("-");
    console.log(dateArray);

    var year = dateArray[0];
    console.log(year);

    var month = dateArray[1];
    console.log(month);

    var date = dateArray[2];
    console.log(date);

    var yr = year % 100;
    if (yr < 10) {
        yr = "0" + yr;
    }
    console.log("year in yy format: " + yr);

    var format1 = date + month + year;
    console.log("dd/mm/yyyy: " + format1);

    var format2 = month + date + year;
    console.log("mm/dd/yyyy: " + format2);

    var format3 = year + month + date;
    console.log("yyyy/mm/dd: " + format3);

    var format4 = month + date + yr;
    console.log("mm/dd/yy: " + format4);

    var reversed1 = format1.split("").reverse().join("");
    var reversed2 = format2.split("").reverse().join("");
    var reversed3 = format3.split("").reverse().join("");
    var reversed4 = format4.split("").reverse().join("");

    if (reversed1 === format1) {
        console.log("f1 is palindrome");
        document.getElementById('after_submit').style.visibility = "visible";
        document.getElementById('after_submit').innerHTML = "Yay!! Your birthday " + dateValue + " is palindrome in the format dd/mm/yyyy";
    }

    else if (reversed2 === format2) {
        console.log("f2 is palindrome");
        document.getElementById('after_submit').style.visibility = "visible";
        document.getElementById('after_submit').innerHTML = "Yay!! Your birthday " + dateValue + " is palindrome in the format mm/dd/yyyy";
    }

    else if (reversed3 === format3) {
        console.log("f3 is palindrome");
        document.getElementById('after_submit').style.visibility = "visible";
        document.getElementById('after_submit').innerHTML = "Yay!! Your birthday " + dateValue + " is palindrome in the format yyyy/mm/dd";
    }

    else if (reversed4 === format4) {
        console.log("f4 is palindrome");
        document.getElementById('after_submit').style.visibility = "visible";
        document.getElementById('after_submit').innerHTML = "Yay!! Your birthday " + dateValue + " is palindrome in the format mm/dd/yy";
    }

    else {
        document.getElementById('after_submit').style.visibility = "visible";
        document.getElementById('after_submit').innerHTML = "Awww!! Your birthday " + dateValue + " is not palindrome in any format.";
    }




    //months array
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // succeeding dates calculation
    var fCounter = 0;
    for (var i = 0; i < 5; i++) {
        date = Number(date) + 1;
        console.log(date)
        if (date > Number(monthDays[month - 1])) {

            date = 1;
            // date = date.toString();
            // if(date.length<2)
            // {
            //     date="0"+date;
            // }

            month = Number(month) + 1;
            if (month > 12) {
                month = 1;
                // month = month.toString();
                // if(month.length<2){
                //     month="0"+month;
                // }
                year = Number(year) + 1;
                year = year.toString();
            }

        }

        date = date.toString();
        if (date.length < 2) {
            date = "0" + date;
        }

        month = month.toString();
        if (month.length < 2) {
            month = "0" + month;
        }

        fCounter++;

        // date= date.toString();
        // month= month.toString();
        // year= year.toString();

        console.log("date: " + date);
        console.log("month: " + month);
        console.log("year: " + year);
        console.log("counter: " + fCounter);


        //converting these separate strings into one strings
        var newF1 = date + month + year;
        console.log(i + " dd/mm/yyyy: " + newF1);

        var newF2 = month + date + year;
        console.log(i + " mm/dd/yyyy: " + newF2);

        var newF3 = year + month + date;
        console.log(i + " yyyy/mm/dd: " + newF3);

        // var newF4 = month + date + yr;
        // console.log(i+" mm/dd/yy: " + newF4);

    }
}



check.addEventListener('click', () => {
    extractDate();
});