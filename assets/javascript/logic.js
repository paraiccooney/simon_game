var computerScore = [1,2,3,4,1,2,3,4];
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
    
        
    
    //$(".simon-button").on("click", function(){var color = this.id; playAudio(color)});
    /* check to see if button pushed matches button pressed by machine */
    if (playerScore[playerScore.length - 1] != computerScore[playerScore.length - 1]){gameOver()}
        
    });
    
    
})

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    if (activePlayer === 0){computerGo};
}

function computerGo (){
    timer = 2000;
    for (i = 0; i < 8; i++) {
    setTimeout(function (){
    var i; 
    //generate random number between 1-4
    var randomValue = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(randomValue);
    computerScore.push(randomValue);
    //if statement to apply correct flash
    if (randomValue == 1){
    $("#green").addClass("greenFlash");
    setTimeout(function (){$("#green").removeClass("greenFlash");}, animationLength)
    } else if (randomValue == 2){
        $("#red").addClass("redFlash");
    setTimeout(function (){$("#red").removeClass("redFlash");}, animationLength)
    } else if (randomValue == 3){
        $("#yellow").addClass("yellowFlash");
    setTimeout(function (){$("#yellow").removeClass("yellowFlash");}, animationLength)
    } else {
        $("#blue").addClass("blueFlash");
    setTimeout(function (){$("#blue").removeClass("blueFlash");}, animationLength);
    }}, timer += increaser);}
    //change player once computer has finished looping
    //nextPlayer();
    //console.log(activePlayer);
    //console.log(computerScore);
}


function playAudio(color){
    document.getElementById(color+'-sound').play(); console.log(".play has successfully been called")
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