var computerScore = [1,2,3,4,1,2,3,4];
var playerScore = [];
var currentGo = 0;
var animationLength = 400;
var increaser = 500;
var highScore = 0;

$(document).ready(function() {
    //new game button
    $(".new-game-button").on("click",function(){
        newGame();
    })
    //SIMON-BUTTON FUNCTIONS
    // 1. flash when clicked
    $(".simon-button").on("click", function() {
        var color = this.id;
        $(this).addClass(color + "Flash");
        setTimeout(function() { $(".simon-button").removeClass(color + "Flash"); }, animationLength)
    });
    // 2. push button value to score array
    $(".simon-button").on("click", function() {
        var value = this.value;
        playerScore.push(value);
    //3. log player's score to console    
        console.log(playerScore);
    //4. check to see if button pushed matches button pressed by machine
        if (playerScore[playerScore.length - 1] != computerScore[playerScore.length - 1]){gameOver()}    
    //5. update current score
        currentGo = playerScore.length;
        $("#currentScore").html("Current Score:" + currentGo);
        console.log(currentGo);
    //6. update high score if applicable
        if (currentGo > highScore) { highScore = currentGo }
        $("#highScore").html("High Score:" + highScore);
    //7. run computerGo if player has completed sequence without triggering gameOver
        if (playerScore.length === computerScore.length) {playerScore=[]; computerGo()}
        
        //TEST AUDIO
        playAudioBlue();
});


})

function computerGo() {
    disableButtons();

    //generate random number between 1-4
    var randomValue = Math.floor(Math.random() * (5 - 1) + 1);
    //console.log("the random value is " + randomValue);
    computerScore.push(randomValue);
    console.log("The latest computer score is " + randomValue);
    //TO BE DELETED
    /* var i;
    var timer = 2000;
    for (i = 0; i < computerScore.length; i++) {
        setTimeout(function() {
            console.log(i);
            //once iteration has stopped re-activate the buttons
            if (i = computerScore.length +1) { activateButtons() }
        }, timer += 1000)
    }; */
    
    //loop through each item in the array & flash
    
    var i=0;
    (function myLoop(scoreArray){
        setTimeout(function(){
            console.log("scoreArray is "+ scoreArray.length);
            console.log("i is "+ i);
            if (++i < 9){myLoop(i)};
        },2000);
        })(computerScore);

    //IF STATEMENT TO BE PLACED IN ABOVE LOOP ONCE WORKING
    /*if (computerScore[i] === 1) {
        console.log("green flash")
        $("#green").addClass("greenFlash");
        setTimeout(function() { $("#green").removeClass("greenFlash"); }, animationLength)
    }
    else if (computerScore[i] === 2) {
        console.log("red flash")
        $("#red").addClass("redFlash");
        setTimeout(function() { $("#red").removeClass("redFlash"); }, animationLength)
    }
    else if (computerScore[i] === 3) {
        console.log("yellow flash")
        $("#yellow").addClass("yellowFlash");
        setTimeout(function() { $("#yellow").removeClass("yellowFlash"); }, animationLength)
    }
    else {
        console.log("blue flash")
        $("#blue").addClass("blueFlash");
    setTimeout(function (){$("#blue").removeClass("blueFlash");}, animationLength);
    }*/
}

function playAudioBlue() {
    var x = document.getElementById("blue-sound");
    x.play();
}


function gameOver() {
    /* stop the scores from incrementing */
    $("#currentScore").html("Current Score:" + (currentGo - 1));
    $("#highScore").html("High Score:" + (highScore - 1));
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
    setTimeout(function() { alert("Game Over");
        resetGame() }, 3300);;
}

function gameOverFlash() {
    $("#green").addClass("greenFlash");
    setTimeout(function() { $("#green").removeClass("greenFlash"); }, animationLength);
    $("#blue").addClass("blueFlash");
    setTimeout(function() { $("#blue").removeClass("blueFlash"); }, animationLength);
    $("#red").addClass("redFlash");
    setTimeout(function() { $("#red").removeClass("redFlash"); }, animationLength);
    $("#yellow").addClass("yellowFlash");
    setTimeout(function() { $("#yellow").removeClass("yellowFlash"); }, animationLength)
}

function resetGame() {
    console.log("the game has been reset");
    computerScore = [];
    playerScore = [];
    activePlayer = 0;
    currentGo = 0;
    $("#currentScore").html("Current Score: 0");
}

function newGame (){
    computerScore = [];
    playerScore = [];
    activePlayer = 0;
    currentGo = 0;
    $("#currentScore").html("Current Score: 0");
    computerGo();
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
