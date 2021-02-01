function openNav(){
  $('#navbar-toggle-on').css({
    'left':'100%',
    'transition-duration': '1.25s',
  });
  $('#navbar-container').css({
    'display':'block',
    'width':'100%',
    'transition-duration': '1.25s',
  });
}

function closeNav(){
  $('#navbar-toggle-on').css({
    'left':'0',
    'transition-duration': '0.2s',
  });
  $('#navbar-container').css({
    'width':'0',
    'transition-duration': '0.2s',
  });
}