$('.wwdimg').mouseover(function(){
    $('#img_holder').css("opacity", "0.6");
});
  $('.wwdimg').mouseout(function(){
    $('#img_holder').css("opacity", "1");
});

var $object = document.getElementById('img_holder');
var $object1 = document.getElementById('overlap');
var $object2 = document.getElementById('background2');
var $object3 = document.getElementById('overlap1');
var $object4 = document.getElementById('overlap2');
var $object5 = document.getElementById('overlap3');
var $object6 = document.getElementById('overlap4');
var delayInMilliseconds = 1500;

var $btn = document.getElementById('btn');
var w = window.innerWidth, h = window.innerHeight;

$(".wwdimg").click(function(){
    $(".text").find("p").animate({opacity:0});
    $(this).animate({opacity:0})
    $(this).remove();
    $('#background2').remove();
    $('#img_holder').css("opacity", "0");

});



$btn.addEventListener('click', function (event) {

  $object1.style.left = "0px";
setTimeout(function() {
  $(".overlap-image-nature").animate({opacity:1});
 document.getElementById('hide1').style.display = "block";
}, delayInMilliseconds);
setTimeout(function() {


  document.getElementById('hide').style.display = "block";
}, 2500);
}, false);
