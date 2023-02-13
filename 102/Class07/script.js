function userName(){
    let thisName = prompt("What is your name?");
    let secondName = "";

    if(thisName!=secondName){
        secondName = prompt("Please re-enter name!");

    }
    alert('Hello ${thisName}!');
    
}
function tryAgain(){
    let secondName = "";
    let myName = prompt("What is your name?");
    while(myName != secondName){
        secondName = ('{myName} doesnt match our records, please try again');
    }
    alert ('Hello there ${secondName}');
}