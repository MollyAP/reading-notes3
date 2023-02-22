'use strict'

function whodat() {
    myname = prompt("What is your name?");
    let name = (myname);
    alert("Hello, " + name);
    document.getElementById('name').innerHTML = "<span id='name'>"+name+"</span>";
}
whodat();

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

let userAns = ""
let thisArray = [4,5,7,12, "Hello"];

function printItem(thisItem){
    for(let x = 0; x<thisItem.length; x++){
        console.log(thisItem[x]);
    }
}

printItem(thisArray)

function thisfunc(){

    userAns = prompt("Please guess a number between 1 and 10! :)");


    while (userAns != 5){
        if (userAns < 5){
            alert("Your number is too low! Try again!");
            userAns = prompt("Please guess a number again!");
        }
    else if(userAns > 5){
        alert("Your number is too high! Try again!");
        userAns = prompt("Please guess a number again!")
    }
}
alert("You guessed right!!!");
}


function promptUser(expectedAnswer) {
  let chancesLeft = 4;
  let answeredCorrectly = false;
  
  while (chancesLeft > 0) {
    const answer = prompt('Please enter your answer:');
    if (answer === null) {
      break;
    } 
    else if (answer === expectedAnswer) {
      answeredCorrectly = true;
      break;
    }
    chancesLeft--;
  }
  if (!answeredCorrectly) {
    alert('You are out of chances!');
  }
}