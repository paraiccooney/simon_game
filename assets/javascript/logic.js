var computerScore = [2,2,3];
var playerScore = [];
var currentGo = 0;
var animationLength = 400;
var activePlayer = 0;
var increaser = 500;
var highScore = 0;

$(document).ready(function(){
     
$(".simon-button").on("click", function(){
    var color = this.id;
    $(this).addClass(color+"Flash");
    setTimeout(function (){$(".simon-button").removeClass(color+"Flash");}, animationLength)
    });
    $(".simon-button").on("click", function(){
    var value = this.value;
    playerScore.push(value);
    console.log(playerScore);
    currentGo = playerScore.length;
    $("#currentScore").html("Current Score:"+currentGo);
    console.log(currentGo);
    
    if (currentGo > highScore){highScore= currentGo}
        
    $("#highScore").html("High Score:"+highScore);
    
        
    /* check to see if button pushed matches button pressed by machine */
    //if (playerScore[playerScore.length - 1] != computerScore[playerScore.length - 1]){gameOver()}
        
    });
    
    
})

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    if (activePlayer === 0){computerGo};
}
 function computerGo(){
    disableButtons();
    
    
    //generate random number between 1-4
    var randomValue = Math.floor(Math.random() * (5 - 1) + 1);
    console.log("the random value is "+randomValue);
    computerScore.push(randomValue);
    console.log("The computers score is "+computerScore);
    //loop through each item in the array & flash
    var i;
    var timer = 2000;
    for (i = 0; i < computerScore.length; i++){setTimeout(function(){console.log(i); 
    //once iteration has stopped re-activate the buttons
    if (i= computerScore.length){activateButtons()}},timer += 1000)};
    
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
     //nextPlayer();
 }
    
    
    
 
computerGo();

function playAudioBlue(){
     var x = document.getElementById("blue-sound");
    x.play();
}

function gameOver(){
    /* stop the scores from incrementing */
    $("#currentScore").html("Current Score:"+(currentGo-1));
    $("#highScore").html("High Score:"+(highScore -1));
    /* loop through flashes */
    var i = 0;
    timer=400;
    increaserTwo=600;
    for (i=0 ; i<4; i++){
      setTimeout(function(){
    gameOverFlash()}, timer += increaserTwo)         
    };
    /* alert users & reset game */
    setTimeout(function(){alert("Game Over");resetGame()}, 3300);
    ;
}

function gameOverFlash(){
    $("#green").addClass("greenFlash");
    setTimeout(function (){$("#green").removeClass("greenFlash");}, animationLength);
    $("#blue").addClass("blueFlash");
    setTimeout(function (){$("#blue").removeClass("blueFlash");}, animationLength);
    $("#red").addClass("redFlash");
    setTimeout(function (){$("#red").removeClass("redFlash");}, animationLength);
        $("#yellow").addClass("yellowFlash");
    setTimeout(function (){$("#yellow").removeClass("yellowFlash");}, animationLength)
    }

function resetGame(){
    console.log("the game has been reset");
    computerScore=[];
    playerScore=[];
    activePlayer=0;
    currentGo=0;
    $("#currentScore").html("Current Score: 0");
}

function disableButtons(){
    document.getElementById("green").disabled = true;
    document.getElementById("red").disabled = true;
    document.getElementById("yellow").disabled = true;
    document.getElementById("blue").disabled = true;
  }
  
  function activateButtons(){
    document.getElementById("green").disabled = false;
    document.getElementById("red").disabled = false;
    document.getElementById("yellow").disabled = false;
    document.getElementById("blue").disabled = false;
  }
