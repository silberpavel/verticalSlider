

// document.getElementById('slider-left').onclick = sliderUp;
// var up = 0;

// function sliderUp() {
//     var polosa = document.getElementById('polosa');
//     up += 200;
//     if (up < 800) {
//         up = 0;
//     }    
//     polosa.style.left = up + 'px';
// }


var offset = 0;
var count = $(".slide-item-wrapper > * > *").length;


var i = -200;
window.setInterval(

  function() {
    // offset = (offset - 200) % (count * 200); // 104px div height (incl margin)
    // offset = -200;

    // for (var i = 0; i <= -800; i-200) {
    

    $(".slide-item-wrapper > *").css({
      "transform": "translateY(" + i + "px)"
      
    });

    if(i < -800) {
    	i = -200;
    }
    

	// }
  }, 1000);

    





// $('.user-text').css({
//   '-webkit-transform' : 'scale(' + ui.value + ')',
//   '-moz-transform'    : 'scale(' + ui.value + ')',
//   '-ms-transform'     : 'scale(' + ui.value + ')',
//   '-o-transform'      : 'scale(' + ui.value + ')',
//   'transform'         : 'scale(' + ui.value + ')'
// });