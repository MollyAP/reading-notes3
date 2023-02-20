function show_prompt() {
    var promptRet = prompt("What is your name?");

    document.getElementById('promptreturn').innerHTML = promptRet;
    if (promptRet == null) {
        document.getElementById('promptexplanation').innerHTML = "Answer it, nerd.";
    }else{
        document.getElementById('promptexplanation').innerHTML = "<span id='promptretval'>Hewwo, " + promptRet + " nice to meet you ^W^</span>";
    }
}

function show_prompt() {
    var promptRet = prompt("Do you like waffles? ^^");

    document.getElementById('promptreturn').innerHTML = promptRet;
    if (promptRet == null) {
        document.getElementById('promptexplanation').innerHTML = "Guess you like tacos more.";
    }else{
        document.getElementById('promptexplanation').innerHTML = "<span id='promptretval'>Omg me too!! " + promptRet + " </span>";
    }
}

function show_prompt() {
    var promptRet = prompt("Do you wanna watch anime??");

    document.getElementById('promptreturn').innerHTML = promptRet;
    if (promptRet == null) {
        document.getElementById('promptexplanation').innerHTML = "BAKA!!!.";
    }else{
        document.getElementById('promptexplanation').innerHTML = "<span id='promptretval'>YAAYY!1 " + promptRet + " </span>";
    }
}

function show_prompt() {
    var promptRet = prompt("Did you enjoy answering these questions?");

    document.getElementById('promptreturn').innerHTML = promptRet;
    if (promptRet == null) {
        document.getElementById('promptexplanation').innerHTML = ":'(.";
    }else{
        document.getElementById('promptexplanation').innerHTML = "<span id='promptretval'>*huggles you* " + promptRet + " </span>";
    }
}