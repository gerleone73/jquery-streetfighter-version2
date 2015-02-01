$(document).ready(function() {
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
    $('.ryu-throwing').hide();
        $('.ryu-still').hide(); 
        $('.ryu-cool').show(); 
  })
  .mouseup(function() {
    $('.ryu-ready').show();
        $('.ryu-still').hide(); 
        $('.ryu-cool').hide(); 
  })


});

    $(document).keydown(function(e) {

       var keycode = (event.which);
    if(keycode == '88'){
    playHadouken();    
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.ryu-cool').hide(); 
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }

  );
}

$(document).keyup(function(){
  $('.ryu-cool').hide();
  $('.ryu-ready').show(); 
  $('.ryu-still').hide(); 
  $('.ryu-throwing').hide();

});


 


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


 });
