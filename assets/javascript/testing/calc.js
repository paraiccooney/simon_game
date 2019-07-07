function ifTest(i){
    if (i === 1) {
        return("green flash")
    }
    else if (i === 2) {
        return("red flash")
    }
    else if (i === 3) {
        return("yellow flash")
    }
    else {
        return("blue flash")
    };
}

function disableButtons() {
    document.getElementById("green").disabled = true;
}

function gameOver() {
    /* setTimeout & score incrementors removed for testing purposes */
    /* loop through flashes */
    var i = 0;
    timer = 400;
    increaserTwo = 600;
    for (i = 0; i < 4; i++) {
        setTimeout(function() {
            gameOverFlash()
        }, timer += increaserTwo)
    };
    /* alert user & resets game */
    alert("Game Over");
        resetGame()};
        
function resetGame() {
    /* current score reset removed for testing purposes */
    console.log("the game has been reset");
    return (computerScore = []);
    playerScore = [];
    activePlayer = 0;
    currentGo = 0;
}

function compScore(){
    //generate random number between 1-4
    var randomValue = Math.floor(Math.random() * (5 - 1) + 1);
    computerScore.push(randomValue);
    return computerScore;}
    
