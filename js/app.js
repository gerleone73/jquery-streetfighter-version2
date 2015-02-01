


  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-cool').hide(); 
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-cool').hide(); 
    $('.ryu-still').show();
  })
  
  .mousedown(function() {


    $('.ryu-ready').hide();
        $('.ryu-still').hide(); 
        $('.ryu-cool').show(); 
  })
  .mouseup(function() {
    $('.ryu-ready').hide();
        $('.ryu-still').show(); 
        $('.ryu-cool').hide(); 
})
 
$(document).keydown(function(e) {

    var keycode = (event.which);
    if (e.which == "32") {

      playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide(); 
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
  {'left': '400px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '-136px');
    }
    );
  }

  $(document).keyup(function() {
     var keycode = (event.which);
    if (e.which == "32"){
     $('.ryu-throwing').hide();
     $('.ryu-cool').hide(); 
    $('.ryu-ready').show();
 }


  });


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

