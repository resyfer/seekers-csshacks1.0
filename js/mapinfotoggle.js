function closeInfo(){
  $('#info-container').css({
    'width': '0',
    'opacity': '0',
    'transition-duration': '0.3s',
  });
  setTimeout(function() {
    $('#info-container').css({
    'display':'none',
    })
  }, 300);
}