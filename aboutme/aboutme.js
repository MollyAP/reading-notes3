// function whodat() {
//     myname = prompt("What is your name?");
//     let name = (myname);
//     alert("Hello, " + name);
//     document.getElementById('name').innerHTML = "<span id='name'>"+name+"</span>";
// }
// whodat();

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

let fav = ["Pink", "Blue", "Purple"]
function favcl() {
    let userAns = prompt("What's my favorite color?");
    let answerIsRight = false
    for (let i = 0; i < fav.length; i++) {
        if (userAns == fav[i]) {
            answerIsRight = true
        }

    }
    if (answerIsRight == true) {
        alert ("YOU ARE RIGHT!")
    } else {
        alert ("WRONG")
    }
}

function favnm(expectedAnswer) {
    let chancesLeft = 6;
    let answeredCorrectly = 7;
    let userAns;
    while (chancesLeft > 0 && userAns != answeredCorrectly) {
        userAns = prompt("Go on, guess.");



        if (userAns < 7) {
            alert("Your number is too low! Try again!");
            chancesLeft--
        }
        else if (userAns > 7) {
            alert("Your number is too high! Try again!");
            chancesLeft--
        }

        else if (userAns == 7) {
            alert("Correct! As far as you know, lol.");
        }
        while (chancesLeft == 0) {
            alert("You have ran out of chances");
            break;
        }
    }
}