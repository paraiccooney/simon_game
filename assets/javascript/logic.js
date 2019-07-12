var computerScore = [];
var playerScore = [];
var currentGo = 0;
var animationLength = 400;
var increaser = 500;
var highScore = 0;
let difficulty;

$(document).ready(function() {
    //new game button
    $(".new-game-button").on("click", function() {
        newGame();
    })
    //SIMON-BUTTON FUNCTIONS
    // 1. flash when clicked
    $(".simon-button").on("click", function() {
        var color = this.id;
        $(this).addClass(color + "Flash");
        setTimeout(function() {
            $(".simon-button").removeClass(color + "Flash");
        }, animationLength)
    });
    // 2. push button value to playerScore array
    $(".simon-button").on("click", function() {
        var value = this.value;
        playerScore.push(value);
        //3. check to see if button pushed matches button pressed by machine
        if (playerScore[playerScore.length - 1] != computerScore[playerScore.length - 1]) {
            gameOver()
        }
        else {
            //4. update current score
            currentGo = playerScore.length;
            $("#currentScore").html("Current Score:<br>" + currentGo);
            //5. update high score if applicable
            if (currentGo > highScore) {
                highScore = currentGo
            }
            $("#highScore").html("High Score:<br>" + highScore);
        }
        //6. run computerGo if player has completed sequence without triggering gameOver
        if (playerScore.length === computerScore.length) {
            setTimeout(function() {
                playerScore = [];
                computerGo()
            }, 1000);
        }
    });
    //7. play the correct sound
    $(".simon-button").on("click", function() {
        var color = this.id;
        playAudio(color);
    });

})

function computerGo() {
    disableButtons();
    //pull global array within scope of this function
    compScore();
    //loop through each item in the array & flash
    var i = 0;
    (function myLoop(scoreArray) {
        var difficulty = document.getElementById("difficulty-button").value;
        setTimeout(function() {
            if (computerScore[i] === 1) {
                loopFlash("green");
                playAudio("green");
            }
            else if (computerScore[i] === 2) {
                loopFlash("red");
                playAudio("red");
            }
            else if (computerScore[i] === 3) {
                loopFlash("yellow");
                playAudio("yellow");
            }
            else {
                loopFlash("blue");
                playAudio("blue");
            };
            if (++i < scoreArray.length) {
                myLoop(computerScore)
            }
            else {
                activateButtons()
            };
        }, difficulty);
    })(computerScore);
}

function loopFlash(color) {
    var difficulty = document.getElementById("difficulty-button").value;
    $("#" + color).addClass(color + "Flash");
    setTimeout(function() {
        $("#" + color).removeClass(color + "Flash");
    }, difficulty - 100);
}

function playAudio(color) {
    document.getElementById(color + "-sound").play();
}

function gameOver() {
    //buttons are disabled to stop the user from triggering multiple gameOver alerts
    disableButtons();
    //play fail sound
    document.getElementById("fail-sound").play();
    /* loop through flashes */
    var i = 0;
    timer = 400;
    increaserTwo = 600;
    for (i = 0; i < 4; i++) {
        setTimeout(function() {
            gameOverFlash("red")
            gameOverFlash("green")
            gameOverFlash("blue")
            gameOverFlash("yellow")
        }, timer += increaserTwo)
    };
    /* alert user & resets game */
    setTimeout(function() {
        alert("Game Over");
        resetGame()
    }, 3300);;
}

function gameOverFlash(color) {
    $("#"+color).addClass(color+"Flash");
    setTimeout(function() { $("#"+color).removeClass(color+"Flash"); }, animationLength);
}

function resetGame() {
    computerScore = [];
    playerScore = [];
    currentGo = 0;
    $("#currentScore").html("Current Score:<br> 0");
}

function newGame() {
    document.getElementById("start-sound").play();
    computerScore = [];
    playerScore = [];
    currentGo = 0;
    $("#currentScore").html("Current Score:<br> 0");
    setTimeout(function() { computerGo() }, 1000);
}

function disableButtons() {
    document.getElementById("green").disabled = true;
    document.getElementById("red").disabled = true;
    document.getElementById("yellow").disabled = true;
    document.getElementById("blue").disabled = true;
}

function activateButtons() {
    document.getElementById("green").disabled = false;
    document.getElementById("red").disabled = false;
    document.getElementById("yellow").disabled = false;
    document.getElementById("blue").disabled = false;
}

function compScore() {
    //generate random number between 1-4
    var randomValue = Math.floor(Math.random() * (5 - 1) + 1);
    computerScore.push(randomValue);
    return computerScore;
}
