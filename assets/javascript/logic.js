$(document).ready(function(){
$(".simon-button").on("click", function(){
    var color = this.id;
    $(this).addClass(color+"Flash");
    setTimeout(function (){$(".simon-button").removeClass(color+"Flash");}, animationLength)
    });
})

var animationLength = 400;