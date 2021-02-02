$(window).on('load', function() {
  $('#loader-container').css({
    'opacity':'0',
    'transition-duration':'0.2s',
  });
  setTimeout(function(){
    $('#loader-container').css({
      'display':'none',
    })
  }, 201)
});