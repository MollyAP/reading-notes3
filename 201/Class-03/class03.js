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