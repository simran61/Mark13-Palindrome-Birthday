console.log("working");

const userInput = document.querySelector("#userInput");

const check = document.querySelector(".check");

function extractDate() {
    let dateValue = userInput.value;
    console.log(dateValue);
    console.log("clicked");
    const dateArray = dateValue.split("-");
    console.log(dateArray);

    const year = dateArray[0];
    console.log(year);

    const month = dateArray[1];
    console.log(month);

    const date = dateArray[2];
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
    
    else{
        document.getElementById('after_submit').style.visibility = "visible";
        document.getElementById('after_submit').innerHTML = "Awww!! Your birthday " + dateValue + " is not palindrome in any format.";
    }
}

check.addEventListener('click', () => {
    extractDate();
});