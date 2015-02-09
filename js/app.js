$(document).ready(function() {

  var $ryu = $('#ryu')

  $ryu.mouseenter(function() { 
      $ryu.attr('class','ryu-ready'); 
    })
  .mouseleave(function(){ 
      $ryu.attr('class', 'ryu-still');
    })
  .mousedown(function() {
      $ryu.attr('class', 'ryu-throwing');
       playHadouken()
      $('#hadouken').show()

        .animate(
          {'left':'32em'}
          ,500,
          function(){
            $(this).hide();
            $(this).css('left', '-9em');
          })
    })

  .mouseup(function() { 
      $ryu.attr('class', 'ryu-ready');
       })

   .keydown(function(e) {

       var keycode = (event.which);
    if(keycode == '88'){
      $ryu.attr('class', 'ryu-cool');
      console.log(keycode);
    }
  })

  function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


});
    
  


 



