

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
window.setInterval(
  function() {
    offset = (offset - 200) % (count * 200); // 104px div height (incl margin)
    $(".slide-item-wrapper > *").css({
      "transform": "translateY(" + offset + "px)",
    });
  }, 5000);
