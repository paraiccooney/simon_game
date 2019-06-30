function greenFlash(){
    $(".green-button").animate({backgroundColor: white,
        backgroundImage: radialGradient(circle at 100% 100%, grey 150px, white 15px)},2000,"fast");
}



$(document).ready(function(){
$(".simon-button").on("click", function(){
    var color = this.id;
    color+"Flash()";
    });
    //$(this).addClass(color+"Flash");
    //setTimeout(function (){$(".simon-button").removeClass(color+"Flash");}, animationLength)
})

/* function removeClass(thisButton) {
    thisButton.classList.remove('orange');
} */

var animationLength = 200