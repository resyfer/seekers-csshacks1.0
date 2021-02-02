function openNav(){
  $('#navbar-toggle-on').css({
    'left':'30%',
    'opacity':'0',
    'transition-duration': '0.5s',
  });
  $('#navbar-toggle-off').css({
    'opacity':'100%',
    'transition-duration': '0.5s',
  });
  $('#navbar-container').css({
    'display':'block',
    'width':'30%',
    'transition-duration': '0.5s',
  });
  $('#menu-container').css({
    'display':'block',
  });
  setTimeout(function() {
    $('#menu-container').css({
      'opacity':'100%',
    });
  }, 300);
  setTimeout(function() {
    $("#navbar-toggle-on").css({
      'display':'none',
    });
  }, 500);
}

function closeNav(){
  $('#navbar-toggle-on').css({
    'left':'0',
    'display':'block',
    'opacity':'100',
    'transition-duration': '0.2s',
  });
  $('#navbar-container').css({
    'width':'0',
    'transition-duration': '0.2s',
  });
  $('#menu-container').css({
    'display':'none',
  });
  $('#menu-container').css({
    'opacity':'0',
  });
  $('#navbar-toggle-off').css({
    'opacity':'0',
    'transition-duration': '0.2s',
  });
}