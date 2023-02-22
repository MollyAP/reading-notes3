'use strict'

function show_prompt1() {
    var a = prompt ("Make sure to capitalize, pls!");

    document.getElementById('promptreturn1').innerHTML = a;
    if (a == "No") {
        document.getElementById('promptreturn1').innerHTML = "Correct!";
    }
    else if (a == "Yes") {
        document.getElementById('promptreturn1').innerHTML = "Incorrect! Try Again?";
    }
    else{
        document.getElementById('promptreturn1').innerHTML = "<span id='promptretval'>" + " You must answer YES or NO</span>";
    }
}

function show_prompt2() {
    var b = prompt ("Make sure to capitalize, pls!");

    document.getElementById('promptreturn2').innerHTML = b;
    if (b == "No") {
        document.getElementById('promptreturn2').innerHTML = "Incorrect! Try Again?";
    }
    else if (b == "Yes") {
        document.getElementById('promptreturn2').innerHTML = "Correct!";
    }
    else{
        document.getElementById('promptreturn2').innerHTML = "<span id='promptretval'>" + "You must answer YES or NO</span>";
    }
}
function show_prompt3() {
    var c = prompt ("Make sure to capitalize, pls!");

    document.getElementById('promptreturn3').innerHTML = c;
    if (c == "No") {
        document.getElementById('promptreturn3').innerHTML = "Incorrect! Try Again?";
    }
    else if (c == "Yes") {
        document.getElementById('promptreturn3').innerHTML = "Correct!";
    }
    else{
        document.getElementById('promptreturn3').innerHTML = "<span id='promptretval'>" + "You must answer YES or NO</span>";
    }
}
function show_prompt4() {
    var d = prompt ("Make sure to capitalize, pls!");

    document.getElementById('promptreturn4').innerHTML = d;
    if (d == "No") {
        document.getElementById('promptreturn4').innerHTML = "Correct!";
    }
    else if (d == "Yes") {
        document.getElementById('promptreturn4').innerHTML = "Incorrect! Try Again?";
    }
    else{
        document.getElementById('promptreturn4').innerHTML = "<span id='promptretval'>" + "You must answer YES or NO</span>";
    }
}
function show_prompt5() {
    var e = prompt ("Make sure to capitalize, pls!");

    document.getElementById('promptreturn5').innerHTML = e;
    if (e == "No") {
        document.getElementById('promptreturn5').innerHTML = "Incorrect! Try Again?";
    }
    else if (e == "Yes") {
        document.getElementById('promptreturn5').innerHTML = "Correct!";
    }
    else{
        document.getElementById('promptreturn5').innerHTML = "<span id='promptretval'>" + " You must answer YES or NO</span>";
    }
}