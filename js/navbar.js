/* PC */
function openNav(){
  $('#navbar-toggle-pc-on').css({
    'left':'30%',
    'opacity':'0',
    'transition-duration': '0.5s',
  });
  $('#navbar-toggle-pc-off').css({
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
    $("#navbar-toggle-pc-on").css({
      'display':'none',
    });
  }, 500);
}

function closeNav(){
  $('#navbar-toggle-pc-on').css({
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
  $('#navbar-toggle-pc-off').css({
    'opacity':'0',
    'transition-duration': '0.2s',
  });
}


/* Mobile */
function openMobNav(){
  $('#navbar-toggle-mob-on').css({
    'left':'100%',
    'opacity':'0',
    'transition-duration': '0.5s',
  });
  $('#navbar-toggle-mob-off').css({
    'opacity':'100%',
    'transition-duration': '0.5s',
  });
  $('#navbar-container').css({
    'display':'block',
    'width':'100%',
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
    $("#navbar-toggle-mob-on").css({
      'display':'none',
    });
  }, 500);
}

function closeMobNav(){
  $('#navbar-toggle-mob-on').css({
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
  $('#navbar-toggle-mob-off').css({
    'opacity':'0',
    'transition-duration': '0.2s',
  });
}