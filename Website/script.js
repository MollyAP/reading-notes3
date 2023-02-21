function show_prompt1() {
    var a = prompt("What is your name?");

    document.getElementById('promptreturn1').innerHTML = a;
    if (a == null) {
        document.getElementById('promptreturn1').innerHTML = "Answer it, nerd.";
    }else{
        document.getElementById('promptreturn1').innerHTML = "<span id='promptretval'>Hewwo, " + a + " nice to meet you ^W^</span>";
    }
}

function show_prompt2() {
    var b = prompt("Do you like waffles? ^^");

    document.getElementById('promptreturn2').innerHTML = b;
    if (b == null) {
        document.getElementById('promptreturn2').innerHTML = "Guess you like tacos more.";
    }else{
        document.getElementById('promptreturn2').innerHTML = "<span id='promptretval'>Omg me too!! " + b + " </span>";
    }
}

function show_prompt3() {
    var c = prompt("Do you wanna watch anime??");

    document.getElementById('promptreturn3').innerHTML = c;
    if (c == null) {
        document.getElementById('promptreturn3').innerHTML = "BAKA!!!.";
    }else{
        document.getElementById('promptreturn3').innerHTML = "<span id='promptretval'>YAAYY!1 " + c + " </span>";
    }
}

function show_prompt4() {
    var d = prompt("Did you enjoy answering these questions?");

    document.getElementById('promptreturn4').innerHTML = d;
    if (d == null) {
        document.getElementById('promptreturn4').innerHTML = ":'(.";
    }else{
        document.getElementById('promptreturn4').innerHTML = "<span id='promptretval'>*huggles you* " + d + " </span>";
    }
}