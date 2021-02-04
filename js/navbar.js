function openNav(){
  $('#navbar-container').css({
    'transform':'translate(0, -50%)',
    'transition-duration':'0.2s',
  });
  $('#navbar-toggle-on').css({
    'opacity':'0',
    'transition-duration':'0.2s',
  })
}

function closeNav(){
  $('#navbar-container').css({
    'transform':'translate(-100%, -50%)',
    'transition-duration':'0.2s',
  });
  $('#navbar-toggle-on').css({
    'opacity':'100%',
    'transition-duration':'0.2s',
  })
}

/* Map.html */
  /* PC */
function openMapNav(){
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

function closeMapNav(){
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
function openMobMapNav(){
  $('#navbar-toggle-mob-on').css({
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

function closeMobMapNav(){
  $('#navbar-toggle-mob-on').css({
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
    'opacity':'0',
  });
  $('#navbar-toggle-mob-off').css({
    'opacity':'0',
    'transition-duration': '0.2s',
  });
}