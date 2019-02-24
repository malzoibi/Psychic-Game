
var randomLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0; 
var losses = 0;
var guessesLeft = 9; 
var userGuess = [];


var randomGuess = randomLetters[Math.floor(Math.random() * randomLetters.length)];
console.log(randomGuess);

document.onkeydown = function(event) {
    var buttonPress = (String.fromCharCode(event.keyCode)).toLowerCase();
    addLetter(buttonPress);
    }
function addLetter(usersKeyPress){
    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })
        if (repeatGuess){
            alert(usersKeyPress);
        }
        else{
            userGuess.push(usersKeypress);
            console.log(userGuess);

        showUserGuess();
        guessMatch(usersKeypress);
        }
    }

function viewLettersGuessed() {
    var userStr = lettersGuessed.join(", ");
    document.getElementById("userGuess").innerHTML = userStr;
}


function compare (character){
    console.log(character);
    console.log(randomGuess);

    if (character === randomGuess){
        wins++;

    } 
    else if (guessesLeft === 0) {
        losses++;
    }
    else{
        guessesLeft--;
    }
}
function showWins(){
    document.getElementById('wins').innerHTML = wins;
}
function showGuessRemaining(){
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
}
function resetVariables(){
    lettersGuessed = [];
    guessesLeft = 10;
}
function startGame() {
    showGuessRemaining();
    showWins();
}
startGame(); 


